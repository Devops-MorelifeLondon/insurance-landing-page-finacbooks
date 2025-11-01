'use client';

import { FilePenLine, ShieldCheck, CreditCard } from 'lucide-react';

// Define the steps for the process section
const processSteps = [
  {
    icon: FilePenLine,
    title: '1. Enter Your Details',
    description: 'Fill in your basic information to get a personalized premium quote instantly.',
  },
  {
    icon: ShieldCheck,
    title: '2. Choose Your Cover',
    description: 'Select your desired life cover amount and policy term online, with zero paperwork.',
  },
  {
    icon: CreditCard,
    title: '3. Pay & Get Covered',
    description: 'Complete the payment securely to activate your policy and ensure peace of mind.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-white py-16 sm:py-24" aria-label="How to get covered">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="font-semibold text-[#00afef] uppercase tracking-wider">
            Simple & Transparent
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Get Covered in 3 Easy Steps
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our entire process is designed to be quick, easy, and completely online.
          </p>
        </div>

        {/* Process Steps Layout */}
        <div className="relative">
          {/* The connecting line for desktop view */}
          <div
            className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-300"
            aria-hidden="true"
          />
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-8">
            {processSteps.map((step) => (
              <div key={step.title} className="text-center">
                {/* Icon Circle */}
                <div className="relative flex items-center justify-center w-24 h-24 bg-white border-4 border-white rounded-full mx-auto z-10 shadow-lg">
                  <div className="flex items-center justify-center w-full h-full bg-[#00afef] rounded-full">
                    <step.icon className="w-12 h-12 text-white" aria-hidden="true" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
