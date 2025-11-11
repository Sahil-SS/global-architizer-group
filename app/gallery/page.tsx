"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ChevronDown } from "lucide-react";

export default function GalleryPage() {
  // Balanced and symmetrical gallery layout
  const galleryImages = [
    { src: "/images/gallery1.jpg" },
    { src: "/images/gallery2.jpg" },
    { src: "/images/gallery3.jpg" },
    { src: "/images/gallery4.jpg" },
    { src: "/images/gallery5.jpg" },
    { src: "/images/gallery6.jpg" },
    { src: "/images/gallery7.jpg" },
    { src: "/images/gallery8.jpg" },
    { src: "/images/gallery9.jpg" },
  ];

  const scrollToGallery = () => {
    const section = document.getElementById("gallery-grid");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-[#0A0A0A] text-white overflow-hidden">
      <Navbar />

      {/* 🌆 HERO SECTION */}
      <section className="relative h-[100vh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Gallery Hero"
            fill
            priority
            className="object-cover opacity-80"
          />
        </div>

        {/* Overlay Layers */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#E0B973]/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-[#E0B973] text-lg md:text-xl mb-4 tracking-wide"
          >
            A celebration of design, light, and detail
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-4xl md:text-6xl font-semibold uppercase leading-tight mb-6"
          >
            <span className="text-gray-200">Where Vision Meets</span> <br />
            <span className="text-[#E0B973]">Architectural Brilliance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Discover timeless spaces that merge creativity and structure —  
            a symphony of luxury, precision, and emotion.
          </motion.p>
        </div>

        {/* Animated Scroll Arrow */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={scrollToGallery}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer z-10 group"
        >
          <ChevronDown className="text-[#E0B973] w-10 h-10 group-hover:text-[#ffd67e] transition-colors duration-300" />
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#E0B973]/70 to-transparent mt-2 mx-auto opacity-70 group-hover:opacity-100 transition-opacity" />  
        </motion.div>
      </section>

      {/* 🖼️ SYMMETRICAL GALLERY SECTION */}
      <section
        id="gallery-grid"
        className="py-24 px-6 lg:px-20 max-w-7xl mx-auto relative"
      >
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[#E0B973] text-3xl md:text-4xl font-semibold uppercase text-center mb-16 tracking-wide"
        >
          <span className="italic">Our Design Gallery</span>
        </motion.h2>

        {/* Gradient Background Accent */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(224,185,115,0.03)_1px,transparent_1px)] bg-[size:22px_22px]" />

        {/* Symmetrical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                type: "spring",
                stiffness: 120,
              }}
              className="relative overflow-hidden rounded-2xl group aspect-[4/3]"
            >
              {/* Image */}
              <Image
                src={img.src}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gold Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>

              {/* Glow Border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#E0B973]/60 transition-all duration-700 rounded-2xl"></div>

              {/* Title Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-6 left-6 text-left opacity-0 group-hover:opacity-100"
              >
                <p className="text-[#E0B973] italic text-sm tracking-wider font-light">
                  Project {index + 1}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✨ Bottom Accent */}
      <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#E0B973] to-transparent mx-auto opacity-50 mb-20" />

      <Footer />
      <ScrollToTop />
    </main>
  );
}
