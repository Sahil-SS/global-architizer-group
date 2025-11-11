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

  return (
    <main className="bg-[#0A0A0A] text-white">
        <Navbar />
      {/* 🌆 HERO SECTION */}
      <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-[#E0B973] mb-6">
            About Global Architizer Group
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

      {/* 📊 METRICS */}
      <section className="py-16 bg-[#121212]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(224,185,115,0.3)",
              }}
              className="bg-[#0A0A0A] p-8 rounded-xl border border-[#1f1f1f] hover:border-[#E0B973] transition-all duration-300"
            >
              <h3 className="text-[#E0B973] text-4xl font-semibold mb-2">
                {metric.number}
              </h3>
              <p className="text-gray-400 uppercase text-sm tracking-wider">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
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

      {/* 👥 LEADERSHIP CARD */}
      <section className="py-20 bg-[#121212] px-6 lg:px-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left - Team Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 flex justify-center"
          >
            <Image
              src="/images/team.jpg"
              alt="Our Team"
              width={500}
              height={400}
              className="rounded-2xl object-cover"
            />
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <p className="text-gray-300 italic text-xl mb-6">
              “The function of leadership is to produce more leaders, not more
              followers.”
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              At{" "}
              <span className="text-[#E0B973] font-semibold">
                GAG Developments
              </span>
              , our mission is clear: bridge the gap between investors and the
              most lucrative opportunities in the real estate landscape. We’re
              dedicated to maximizing returns on investment (ROI) by providing
              tailored guidance and in-depth market insights.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              With our personalized approach, we empower clients to navigate the
              dynamic real estate market effectively, ensuring they capitalize
              on the best investments available.
            </p>

            {/* Signature */}
            <div className="mt-8">
              <Image
                src="/images/signature.png"
                alt="Signature"
                width={150}
                height={50}
                className="opacity-80"
              />
              <p className="text-sm text-gray-500 mt-2">
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
