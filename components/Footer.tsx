'use client';

import { Mail, Phone, MapPin, ChevronRight, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company Info */}
          <div className="space-y-3">
            <img src="/finacbooks-logo.png" className="w-28 h-auto" alt="FinacBooks Logo" />
            <p className="text-sm text-gray-700 leading-relaxed">
              Providing reliable and affordable term life insurance to secure your family's future. Our process is simple, transparent, and online.
            </p>
            <p className="text-xs text-[#00afef] font-medium">
              Available for residents of Uttar Pradesh major cities. Online quote valid everywhere.
            </p>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-base font-semibold text-black mb-3">Get In Touch</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#00afef]" />
                <span className="text-sm text-gray-600">6386850623 (Toll-Free)</span>
              </div>
             
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#00afef]" />
                <span className="text-sm text-gray-600">Lucknow, Uttar Pradesh</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold text-black mb-3">Our Services</h4>
            <ul className="space-y-1">
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-1 h-4 bg-[#00afef] rounded"></div>
                <span>Term Life Insurance</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-1 h-4 bg-[#00afef] rounded"></div>
                <span>Family Protection</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-1 h-4 bg-[#00afef] rounded"></div>
                <span>Online Quotes</span>
              </li>
            </ul>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-4 pt-3">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} FinacBooks. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
