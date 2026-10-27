import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  const isProd = process.env.NODE_ENV === 'production';

  // 1. Security Header Hardening & Fingerprint Removal
  app.disable('x-powered-by');

  // Enforce body size limits to prevent Denial of Service (DoS) attacks
  app.use(express.json({ limit: '10kb' }));
  app.use(express.urlencoded({ extended: true, limit: '10kb' }));

  // Standard Security Headers
  app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
  });

  // 2. Sliding Window In-Memory Rate Limiting for Spam & Flood Protection
  const rateLimitMap = new Map<string, number[]>();
  const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
  const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 submissions per 15 minutes per IP

  // Cleanup expired rate limiting records every 5 minutes to avoid memory leaks
  setInterval(() => {
    const now = Date.now();
    for (const [ip, timestamps] of rateLimitMap.entries()) {
      const active = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (active.length === 0) {
        rateLimitMap.delete(ip);
      } else {
        rateLimitMap.set(ip, active);
      }
    }
  }, 5 * 60 * 1000);

  // 3. Secure Backend Contact / Direct Brief API Proxy
  app.post('/api/contact', async (req, res) => {
    try {
      // Resolve client IP safely from forwarded headers
      const forwarded = req.headers['x-forwarded-for'];
      const clientIp = typeof forwarded === 'string'
        ? forwarded.split(',')[0].trim()
        : req.socket.remoteAddress || '127.0.0.1';

      const now = Date.now();
      const clientHistory = (rateLimitMap.get(clientIp) || []).filter(
        (t) => now - t < RATE_LIMIT_WINDOW_MS
      );

      // Check rate limit
      if (clientHistory.length >= MAX_REQUESTS_PER_WINDOW) {
        return res.status(429).json({
          success: false,
          error: 'Rate limit exceeded: You have submitted multiple briefs recently. Please wait a few minutes before submitting again.',
        });
      }

      const { name, email, service, timeline, message, website_url } = req.body;

      // Honeypot Protection: Bots automatically fill hidden fields; humans do not
      if (website_url) {
        // Return 200 without forwarding to silently neutralize bot spam
        return res.status(200).json({
          success: true,
          message: 'Your brief has been safely received.',
        });
      }

      // Server-Side Input Validation
      if (!name || typeof name !== 'string' || name.trim().length === 0) {
        return res.status(400).json({
          success: false,
          error: 'Please enter your name or company name.',
        });
      }

      if (!email || typeof email !== 'string' || email.trim().length === 0) {
        return res.status(400).json({
          success: false,
          error: 'Please enter a valid email address.',
        });
      }

      // RFC-compliant email regex validation
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
      const cleanEmail = email.trim();
      if (!emailRegex.test(cleanEmail) || cleanEmail.length > 254) {
        return res.status(400).json({
          success: false,
          error: 'The provided email address format is invalid.',
        });
      }

      if (!message || typeof message !== 'string' || message.trim().length < 5) {
        return res.status(400).json({
          success: false,
          error: 'Please provide brief details (at least 5 characters).',
        });
      }

      if (message.length > 5000) {
        return res.status(400).json({
          success: false,
          error: 'The message exceeds the maximum allowed length of 5,000 characters.',
        });
      }

      // Sanitize inputs to prevent Cross-Site Scripting (XSS) and injection attacks
      const sanitizeText = (input: string, maxLen: number) =>
        input
          .replace(/[<>]/g, '') // Strip angle brackets to prevent HTML/script tag injection
          .trim()
          .slice(0, maxLen);

      const sanitizedName = sanitizeText(name, 100);
      const sanitizedEmail = cleanEmail.toLowerCase();
      const sanitizedService = sanitizeText(service || 'E-commerce Operations & Store Management', 150);
      const sanitizedTimeline = sanitizeText(timeline || 'Immediate / Next 2 Weeks', 100);
      const sanitizedMessage = sanitizeText(message, 5000);

      // Record rate limit attempt
      clientHistory.push(now);
      rateLimitMap.set(clientIp, clientHistory);

      // Secure Server-Side Formspree Endpoint:
      // Kept server-side so API credentials and endpoints are never exposed to browser scraping
      const formspreeEndpoint =
        process.env.FORMSPREE_ENDPOINT || 'https://formspree.io/f/mvkkkvkl';

      const forwardResponse = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: sanitizedName,
          email: sanitizedEmail,
          service: sanitizedService,
          timeline: sanitizedTimeline,
          message: sanitizedMessage,
          _subject: `[Portfolio Direct Brief] ${sanitizedService} - ${sanitizedName}`,
        }),
      });

      if (!forwardResponse.ok) {
        // Log generic failure without leaking user data
        console.error(`[Security] Backend dispatch provider returned status ${forwardResponse.status}`);
        return res.status(502).json({
          success: false,
          error: 'The email delivery service is momentarily unavailable. Please connect directly via WhatsApp or Gmail.',
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Your project brief was safely delivered to Ruth.',
      });
    } catch (err) {
      // Never expose stack traces or internal server details to users
      console.error('[Security] Error processing contact submission');
      return res.status(500).json({
        success: false,
        error: 'An internal error occurred while processing your request. Please try again later.',
      });
    }
  });

  // 4. Vite Dev Middleware / Production Static Asset Serving
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Security] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
