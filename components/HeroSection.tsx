'use client';

import { Shield, CheckCircle, Award, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-blue-50 overflow-hidden">
      <div className="container mx-auto mt-6 px-4 sm:px-6 lg:px-8 py-16 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-start">
          {/* Left column - Content */}
          <div
            className="text-center lg:text-left flex flex-col justify-center"
            style={{ minHeight: '539px' }}
          >
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Secure Your Family’s Future for Just{' '}
                <span className="text-[#00afef]">₹500/month*</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                Affordable term life cover, instant online quote — available
                across UP’s major cities.
              </p>
            </div>

            {/* Enhanced Content Section */}
            <div className="mt-8 space-y-4 text-gray-700 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center">
                <CheckCircle size={20} className="mr-3 text-green-500" />
                <span>
                  <strong>High Coverage, Low Premiums:</strong> Get maximum
                  protection at a minimal cost.
                </span>
              </div>
              <div className="flex items-center">
                <Zap size={20} className="mr-3 text-yellow-500" />
                <span>
                  <strong>Instant & Paperless:</strong> Fully digital process from
                  quote to policy issuance.
                </span>
              </div>
              <div className="flex items-center">
                <Award size={20} className="mr-3 text-blue-500" />
                <span>
                  <strong>98.5% Claim Settlement:</strong> Trusted by families all
                  over India.
                </span>
              </div>
            </div>

            <div className="mt-8 flex justify-center lg:justify-start">
              <div className="flex items-center text-sm text-gray-500">
                <Shield size={16} className="mr-2 text-green-600" />
                Protect your loved ones, secure your legacy.
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="w-full p-6 sm:p-8 rounded-xl ">
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
                height: '639px',
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
