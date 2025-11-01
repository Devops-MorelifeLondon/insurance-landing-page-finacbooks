'use client';

import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  const handleGetQuoteClick = () => {
    // Smooth scroll to the hero section form
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-20" aria-label="Final Call to Action">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#00afef] shadow-xl overflow-hidden rounded-xl">
          <div className="relative p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Start Your Quote Now
            </h2>
            <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
              Don’t wait—premiums increase with age and health changes. Secure your cover today and protect your family tomorrow.
            </p>
            <div className="mt-8">
              <button
                onClick={handleGetQuoteClick}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#00afef] px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-300 transform hover:scale-105"
                aria-label="Get My Free Quote"
              >
                Get My Free Quote
                <ArrowRight size={20} />
              </button>
            </div>
            <p className="text-xs text-blue-200 mt-4">
              *Premiums are indicative. Actual amount depends on age, health, cover amount and term. T&Cs apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
