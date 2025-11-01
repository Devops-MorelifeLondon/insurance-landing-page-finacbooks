'use client';

import { CheckCircle } from 'lucide-react';

const benefits = [
  {
    text: "High sum-assured at an affordable premium. For example: life cover up to ₹1 Cr from around ₹500/month.",
  },
  {
    text: "Flexible term options & whole-life cover till age 100.",
  },
  {
    text: "Instant online purchase & claim-intimation ease.",
  },
  {
    text: "Tax savings on premiums paid and death benefit tax-free (as per law).",
  },
  {
    text: "Discounts for early purchase, digital buying & for women (if applicable).",
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="font-semibold text-[#00afef] uppercase tracking-wider">
            Key Benefits
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Why This Cover Works For You
          </h2>
        </div>

        {/* Features List */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="flex-shrink-0 h-6 w-6 text-green-500 mr-3 mt-1" />
                <span className="text-gray-700 text-lg">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
