'use client';

import { ChevronDown, ShieldCheck, Users, Landmark, Award } from 'lucide-react';
import { useState } from 'react';

const trustPoints = [
  {
    icon: ShieldCheck,
    text: 'Claim Settlement Ratio > 99%',
    subtext: '(for the underlying insurer)',
  },
  {
    icon: Users,
    text: '1 Lakh+ Families Protected',
    subtext: 'and counting',
  },
  {
    icon: Landmark,
    text: 'Strong Brand Legacy',
    subtext: 'and a vast partner network',
  },
  {
    icon: Award,
    text: 'IRDAI Registered Insurer',
    subtext: 'fully compliant and regulated',
  },
];

const faqs = [
  {
    question: 'What is term life insurance?',
    answer:
      'A policy that pays out a sum to your nominee if you pass away during the term. It is the purest and most affordable form of life insurance.',
  },
  {
    question: 'How much cover do I need?',
    answer:
      'We recommend a cover that is 10-15× your annual income. You should also factor in outstanding liabilities (like loans) and future financial goals.',
  },
  {
    question: 'What is the cost / premium?',
    answer:
      'Premiums are very affordable. For example, for a healthy 30-year-old, a cover of ₹1 Crore may cost around ₹500/month. The actual quote will vary based on age, health, and cover amount.',
  },
  {
    question: 'Can I buy online?',
    answer:
      'Yes—our process is fully online, designed for your convenience. It involves minimal paperwork and leads to faster approval.',
  },
  {
    question: 'Are there tax benefits?',
    answer:
      'Yes. Premiums paid are eligible for tax deduction under Section 80C of the Income Tax Act, and the death benefit paid to the nominee is typically tax-free under Section 10(10D).',
  },
  {
    question: 'What if I stop paying premiums?',
    answer:
      'The policy may lapse, and you will lose coverage. It is important to choose a premium amount and payment term that you are comfortable with for the long run.',
  },
  {
    question: 'Who should buy this?',
    answer:
      'If you have financial dependents (like a spouse, children, or parents), have loan obligations, or want to ensure your family can maintain their lifestyle in your absence—this plan is essential for you.',
  },
];

export default function TrustAndFaqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-gray-50 py-16 sm:py-20" aria-label="Trust and FAQs">
      <div className="container mx-auto px-4">
        {/* Trust & Credibility Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-semibold text-[#00afef] uppercase tracking-wider">
            Why People Trust Us
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Your Financial Future, Secured
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-blue-100 rounded-full p-4 mb-3">
                <point.icon className="w-8 h-8 text-[#00afef]" />
              </div>
              <p className="font-bold text-gray-900">{point.text}</p>
              <p className="text-sm text-gray-500">{point.subtext}</p>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-semibold text-[#00afef] uppercase tracking-wider">
              Frequently Asked Questions
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Answering Your Doubts
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="p-5 pt-0 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
