/**
 * Google Analytics 4 (GA4) Utility Helper
 * Provides safe event logging without breaking if ad-blockers or offline modes block gtag.
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = 'G-QW8KDMEZJK';

/**
 * Log a custom GA4 event
 * @param eventName Name of the event (e.g. 'generate_lead', 'contact_click')
 * @param params Event parameters
 */
export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, params);
    } catch {
      // Fail silently to prevent user experience disruptions
    }
  }
}
