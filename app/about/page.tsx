"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function AboutPage() {
  const metrics = [
    { number: "1000+", label: "Clients" },
    { number: "1500+", label: "Completed Projects" },
    { number: "25+", label: "Ongoing Projects" },
  ];

  // 👇 Smooth scroll handler for the arrow
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-[#0A0A0A] text-white">
      <Navbar />

      {/* 🌆 HERO SECTION */}
      <section className="relative h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden text-center">
        {/* Background Image */}
        <Image
          src="/images/hero-bg.jpg"
          alt="About Global Architizer Group"
          fill
          className="object-cover opacity-80"
          priority
        />

        {/* Overlay Tint */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* ✨ Bottom Fade Effect */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pointer-events-none"></div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 px-6"
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-[#E0B973] mb-4 uppercase tracking-wide">
            About Global Architizer Group
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            We are creators of timeless architecture — redefining luxury through
            innovative design, craftsmanship, and vision.
            <br className="hidden md:block" />
            Our legacy lies in every detail we build, every skyline we shape.
          </motion.p>
        </motion.div>

        {/* ⬇️ Animated Down Arrow */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
          onClick={handleScrollDown}
        >
          <ChevronDown className="text-[#E0B973] w-10 h-10 hover:scale-110 transition-transform duration-300" />
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#E0B973]/70 to-transparent mt-2 mx-auto opacity-70 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </section>

      {/* 🏛 INTRODUCTION */}
      <section className="py-20 px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            At <span className="text-[#E0B973]">Global Architizer Group</span>{" "}
            we simplify the design and build process. With experts in
            architecture, interior design, and construction all in-house, we
            deliver amazing projects fast, to the highest quality,
            cost-effectively, and seamlessly in Kolkata and across India.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Our Design and Construction team, supported by amazing Customer
            Support, uses the latest technologies to ensure the best possible
            project for you. Even while working with renowned clients, our firm
            is proven to deliver excellence.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Global Architizer Group is a global Architecture, Interior Design
            and Construction firm headquartered in Kolkata. GAG specializes in
            Hotels, Premium Residential, Offices, Villas and Retail projects.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            Our goal is to make world-class design services low-cost, efficient,
            and worry-free — with in-house services, client support, and
            advanced technology for faster, higher-quality results.
          </p>
        </motion.div>
      </section>

      {/* 📊 METRICS – Royal Minimalist Layout */}
      <section className="relative py-24 bg-[#0A0A0A] text-white overflow-hidden">
        {/* Subtle Gold Glow Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#E0B973]/5 to-transparent pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-12 px-6 text-center relative"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative flex flex-col items-center justify-center"
            >
              {/* Number with Elegant Glow */}
              <h3 className="text-[#E0B973] text-6xl md:text-7xl font-semibold tracking-tight drop-shadow-[0_0_8px_rgba(224,185,115,0.25)]">
                {metric.number}
              </h3>

              {/* Label with Gold Accent Underline */}
              <p className="text-gray-300 text-sm uppercase tracking-[0.3em] mt-4 relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#E0B973] after:mx-auto after:mt-3 after:opacity-60">
                {metric.label}
              </p>

              {/* Divider Between Metrics */}
              {i !== metrics.length - 1 && (
                <div className="hidden sm:block absolute -right-24 top-1/2 -translate-y-1/2 w-20 h-px bg-linear-to-r from-[#E0B973]/60 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-32 h-[1.5px] bg-gradient-to-r from-transparent via-[#E0B973] to-transparent mx-auto mt-20 opacity-70 origin-center"
        />
      </section>

      {/* 🏠 PROPERTY GALLERY */}
      <section className="py-20 px-6 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#E0B973] text-3xl font-semibold uppercase text-center mb-12"
        >
          Our Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {["property1.jpg", "property2.jpg", "property3.jpg"].map(
            (img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-2xl border border-[#1f1f1f] hover:border-[#E0B973] transition-all duration-500"
              >
                <Image
                  src={`/images/${img}`}
                  alt="Property"
                  width={400}
                  height={300}
                  className="object-cover w-full h-[280px] hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* 👥 LEADERSHIP SECTION */}
      <section className="relative bg-[#0A0A0A] text-white py-24 px-6 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#E0B973] text-3xl md:text-4xl font-semibold uppercase text-center mb-16 tracking-wide"
        >
          Our Leadership
        </motion.h2>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* LEFT - IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 w-full rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/hero-bg.jpg"
              alt="Our Leadership"
              width={600}
              height={500}
              className="object-cover w-full h-[420px] lg:h-[500px] rounded-2xl"
            />
          </motion.div>

          {/* RIGHT - TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            {/* Quote */}
            <p className="text-[#E0B973] italic text-lg md:text-xl mb-8 leading-relaxed text-center lg:text-left">
              “The function of leadership is to produce more leaders, not more
              followers.”
            </p>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At{" "}
              <span className="text-[#E0B973] font-semibold">
                GAG Developments
              </span>
              , our mission is clear: to bridge the gap between investors and
              the most lucrative opportunities in the real estate landscape. We
              are dedicated to maximizing returns on investment (ROI) through
              tailored strategies, market insights, and unmatched execution.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              With our personalized approach, we empower clients to navigate the
              dynamic real estate market effectively, ensuring every project we
              deliver stands for design excellence, innovation, and long-term
              value.
            </p>

            {/* Signature */}
            <div className="mt-10">
              <Image
                src="/signature.png"
                alt="Signature"
                width={160}
                height={50}
                className="opacity-80"
              />
              <p className="text-sm text-gray-500 mt-2 tracking-wider">
                — Founder, Global Architizer Group
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
