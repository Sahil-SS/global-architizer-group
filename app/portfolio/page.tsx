"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";

export default function PortfolioPage() {
  const metrics = [
    { number: "400", label: "Real Estate Experts" },
    { number: "18+", label: "Languages Spoken" },
    { number: "7+", label: "Offices Worldwide" },
    { number: "22B AED", label: "Assets Under Development" },
  ];

  const projects = [
    {
      image: "/images/project1.jpg",
      title: "Skyline Tower",
      location: "Dubai Marina, UAE",
      desc: "A landmark of sophistication, Skyline Tower redefines urban luxury with sleek architecture and unmatched waterfront views.",
    },
    {
      image: "/images/project2.jpg",
      title: "The Royal Dunes Villas",
      location: "Ras Al Khaimah, UAE",
      desc: "A premium collection of beachfront villas combining modern design and timeless Arabian elegance, built for serene living.",
    },
    {
      image: "/images/project3.jpg",
      title: "BNW Business Bay Residences",
      location: "Downtown Dubai, UAE",
      desc: "High-rise residences designed for professionals seeking luxury, convenience, and skyline views in the heart of Dubai.",
    },
  ];

  return (
    <main className="bg-[#0A0A0A] text-white">
      <Navbar />
      {/* 🌆 HERO SECTION */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero-bg.jpg"
          alt="BNW Developments Portfolio"
          fill
          className="object-cover opacity-80"
          priority
        />

        {/* Overlay for dark tint */}
        <div className="absolute inset-0 bg-black/60" />

        {/* ✨ Bottom Fade (the key blend effect) */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pointer-events-none"></div>

        {/* Text Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-[#E0B973] text-4xl md:text-6xl font-semibold uppercase mb-4">
            Our Projects
          </h1>

          {/* Down Arrow */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex justify-center mt-6"
          >
            <ChevronDown className="text-[#E0B973] w-8 h-8" />
          </motion.div>
        </div>
      </section>

      {/* 🏗 INTRO TEXT */}
      <section className="pt-4 pb-20 px-6 lg:px-20 text-center max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 text-lg leading-relaxed"
        >
          At{" "}
          <span className="text-[#E0B973]">BNW Real Estate Developments</span>,
          we are focused on transforming visionary concepts into reality. With a
          steadfast commitment to innovation and excellence, we specialize in
          creating exceptional properties that stand out in the market, priding
          ourselves on high-end luxury projects that shape the future of Ras Al
          Khaimah and Dubai.
          <br />
          <br />
          In addition to our development capabilities, we offer strategic
          support to help you navigate and optimize your real estate
          investments. Partner with us to experience exceptional luxury living
          and be part of the transformative growth in the UAE real estate
          market.
        </motion.p>
      </section>

      {/* 📊 METRICS SECTION */}
      <section className="py-12 border-y border-[#1f1f1f] bg-[#121212]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center md:items-start relative px-4"
            >
              <h3 className="text-[#E0B973] text-4xl font-semibold">
                {metric.number}
              </h3>
              <p className="text-gray-400 text-sm uppercase tracking-wider mt-1">
                {metric.label}
              </p>

              {/* Golden Divider Line (between metrics on desktop) */}
              {index !== metrics.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-[#2a2a2a]" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🏢 PROJECTS SECTION */}
      <section className="py-20 px-6 lg:px-20 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#E0B973] text-3xl font-semibold uppercase text-center mb-12"
        >
          Featured Developments
        </motion.h2>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="w-full overflow-hidden rounded-2xl border border-[#1f1f1f] hover:border-[#E0B973] transition-all duration-500">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}
                  height={600}
                  className="object-cover w-full h-[450px] hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Details */}
              <div className="mt-8 max-w-3xl">
                <h3 className="text-2xl text-[#E0B973] font-semibold mb-2 uppercase">
                  {project.title}
                </h3>
                <p className="text-gray-500 italic mb-3">{project.location}</p>
                <p className="text-gray-300 leading-relaxed text-base">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
