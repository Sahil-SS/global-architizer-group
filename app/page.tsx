"use client"

import AboutSection from '@/components/AboutSection'
import AwardsSection from '@/components/AwardsSection'
import ExpertiseSection from '@/components/ExpertiseSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import PortfolioSection from '@/components/PortfolioSection'
import ScrollToTop from '@/components/ScrollToTop'
import TestimonialsSection from '@/components/TestimonialsSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import EnquireNowButton from "@/components/EnquireNowButton";
import React, { useState } from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <AwardsSection /> */}
      <WhyChooseUs />
      <AboutSection />
      <ExpertiseSection />
      <PortfolioSection />
      <TestimonialsSection />
      <Footer />
      <ScrollToTop />

      {!menuOpen && <EnquireNowButton />}
    </>
  )
}

export default page