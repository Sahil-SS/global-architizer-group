"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-screen w-full bg-black overflow-hidden">
      {/* ✅ Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg" // your hero background
          alt="Luxury Real Estate Background"
          fill
          priority
          quality={100}
          className="object-cover object-center opacity-70"
        />
      </div>

      {/* ✅ Overlay Tint */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* ✅ Bottom Fade Effect (same as About Page) */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pointer-events-none"></div>

      {/* ✅ Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-[#E0B973] italic text-lg md:text-xl mb-4 tracking-wide"
        >
          Discover the art of modern living
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-white text-4xl md:text-6xl font-semibold uppercase leading-tight"
        >
          Luxury Real Estate <br /> Redefined
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-gray-300 mt-6 text-sm md:text-base max-w-2xl mx-auto"
        >
          Experience sophistication and comfort blended seamlessly — where each
          property tells its own story of elegance and timeless design.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#properties"
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 12px #E0B973",
            boxShadow: "0 0 10px #E0B973",
          }}
          transition={{ duration: 0.3 }}
          className="inline-block mt-10 px-8 py-3 border border-[#E0B973] text-[#E0B973] uppercase tracking-widest text-sm font-light rounded-full transition-all duration-300 hover:bg-[#E0B973] hover:text-black"
        >
          Explore Properties
        </motion.a>
      </motion.div>
    </section>
  );
}
