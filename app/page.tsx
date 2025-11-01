import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AboutSection from '@/components/About';
import CompanyLogoSlider from '@/components/slider';
import AwardsSection from '@/components/AwardsSection';
import FeaturedInSection from '@/components/News';
import UkSellingServices from '@/components/UkSellingServices';
import TestimonialsAndFAQs from '@/components/TestimonialsAndFAQs';
import {

  FaWhatsapp
} from "react-icons/fa6";







export default function Home() {
  return (
    <>
     
      <main role="main">
        <Header />
        <HeroSection />

        <WhyChooseUs />
 
        <ServicesSection />
        <TestimonialsAndFAQs />
        {/* <FeaturedInSection /> */}
        <CTASection />
        <Footer />

        {/* ✅ WhatsApp button */}
        <a
          href="https://wa.me/+916386850623"
          target="_blank"
          rel="noopener noreferrer"
          className="z-50 fixed bottom-4 right-2 md:right-4  text-sm flex items-center gap-2 bg-[#18d96c] hover:bg-green-600 text-white font-medium px-4 py-2 rounded-md shadow-lg transition"
        >
          <FaWhatsapp className='text-[20px]'/>
          
          Chat on WhatsApp
        </a>
      </main>
    </>
  );
}