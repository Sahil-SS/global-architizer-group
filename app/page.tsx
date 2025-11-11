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
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AwardsSection />
      <WhyChooseUs />
      <AboutSection />
      <ExpertiseSection />
      <PortfolioSection />
      <TestimonialsSection />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default page