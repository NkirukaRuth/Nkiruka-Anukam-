/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CondensedNavbar } from './components/CondensedNavbar';
import { CondensedHero } from './components/CondensedHero';
import { CondensedProjects } from './components/CondensedProjects';
import { EducationCertifications } from './components/EducationCertifications';
import { CondensedContact } from './components/CondensedContact';

export default function App() {
  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const briefCard = document.getElementById('direct-brief-card');
    if (briefCard) {
      briefCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      briefCard.classList.add('ring-4', 'ring-amber-400');
      setTimeout(() => {
        briefCard.classList.remove('ring-4', 'ring-amber-400');
      }, 1500);
      return;
    }
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-stone-900 flex flex-col font-sans selection:bg-amber-400 selection:text-stone-950">
      {/* Top Bar with WhatsApp Action */}
      <CondensedNavbar onContactClick={scrollToContact} />

      <main className="flex-1">
        {/* Page 1: Hero with Moving DP, Co-Founder Value Pitch, Hidden Numbers & Interactive Metrics */}
        <CondensedHero 
          onExploreClick={scrollToWork} 
          onContactClick={scrollToContact} 
        />

        {/* Page 2: Dancing Slideshow Showcase & Filterable Artifacts */}
        <CondensedProjects />

        {/* Education & Verified Certifications */}
        <EducationCertifications />

        {/* Tools Strip, Direct Email Dispatch Brief & Direct Inquiries */}
        <CondensedContact />
      </main>
    </div>
  );
}
