'use client';

import { Shield, CheckCircle, Award, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-blue-50 overflow-hidden mt-6">
      <div className="container mx-auto mt-6 px-4 sm:px-6 lg:px-8 py-12 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 items-start">
          {/* Left column - Content */}
          <div
            className="text-center lg:text-left flex flex-col justify-center"
            style={{ minHeight: '539px' }}
          >
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Secure Your Family’s Future for Just{' '}
                <span className="text-[#00afef]">₹500/month*</span>
              </h1>
              <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                Affordable term life cover, instant online quote — available
                across UP’s major cities.
              </p>
            </div>

            {/* Mobile-only Form - Comes after the paragraph */}
            <div className="lg:hidden w-full mt-6 p-4 sm:p-6 rounded-xl ">
              <iframe
                id="JotFormIFrame-253041831403041"
                title="Insurance Landing Page | Finac"
                onLoad={() => {
                  if (window.parent) {
                    window.parent.scrollTo(0, 0);
                  }
                }}
                allow="geolocation; microphone; camera; fullscreen; payment"
                src="https://form.jotform.com/253041831403041"
                frameBorder="0"
                style={{
                  minWidth: '100%',
                  maxWidth: '100%',
                  height: '700px',
                  border: 'none',
                }}
                scrolling="no"
              ></iframe>
            </div>

            {/* Desktop-only Content Features */}
            <div className="hidden lg:block mt-6 space-y-3 text-gray-700 max-w-xl mx-0">
              <div className="flex items-center">
                <CheckCircle size={20} className="mr-3 text-green-500 flex-shrink-0" />
                <span className="text-sm">
                  <strong>High Coverage, Low Premiums:</strong> Get maximum
                  protection at a minimal cost.
                </span>
              </div>
              <div className="flex items-center">
                <Zap size={20} className="mr-3 text-yellow-500 flex-shrink-0" />
                <span className="text-sm">
                  <strong>Instant & Paperless:</strong> Fully digital process from
                  quote to policy issuance.
                </span>
              </div>
              <div className="flex items-center">
                <Award size={20} className="mr-3 text-blue-500 flex-shrink-0" />
                <span className="text-sm">
                  <strong>98.5% Claim Settlement:</strong> Trusted by families all
                  over India.
                </span>
              </div>
            </div>

            {/* Mobile Content Features - After Form on Mobile */}
            <div className="lg:hidden mt-6 space-y-3 text-gray-700 max-w-xl mx-auto">
              <div className="flex items-center justify-center sm:justify-start">
                <CheckCircle size={18} className="mr-2 text-green-500 flex-shrink-0" />
                <span className="text-sm text-center sm:text-left">
                  <strong>High Coverage, Low Premiums:</strong> Get maximum protection at a minimal cost.
                </span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Zap size={18} className="mr-2 text-yellow-500 flex-shrink-0" />
                <span className="text-sm text-center sm:text-left">
                  <strong>Instant & Paperless:</strong> Fully digital process from quote to policy issuance.
                </span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Award size={18} className="mr-2 text-blue-500 flex-shrink-0" />
                <span className="text-sm text-center sm:text-left">
                  <strong>98.5% Claim Settlement:</strong> Trusted by families all over India.
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-center lg:justify-start">
              <div className="flex items-center text-xs sm:text-sm text-gray-500">
                <Shield size={14} className="mr-2 text-green-600 flex-shrink-0" />
                Protect your loved ones, secure your legacy.
              </div>
            </div>
          </div>

          {/* Right column - Form (Desktop Only) */}
          <div className="hidden lg:block w-full p-6 rounded-xl ">
            <iframe
              id="JotFormIFrame-253041831403041"
              title="Insurance Landing Page | Finac"
              onLoad={() => {
                if (window.parent) {
                  window.parent.scrollTo(0, 0);
                }
              }}
              allow="geolocation; microphone; camera; fullscreen; payment"
              src="https://form.jotform.com/253041831403041"
              frameBorder="0"
              style={{
                minWidth: '100%',
                maxWidth: '100%',
                height: '600px',
                border: 'none',
              }}
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
