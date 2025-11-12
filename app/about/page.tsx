"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function AboutPage() {
  const metrics = [
    { number: "1000+", label: "Clients" },
    { number: "1500+", label: "Completed Projects" },
    { number: "25+", label: "Ongoing Projects" },
  ];

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
        <Image
          src="/images/hero-bg.jpg"
          alt="About Global Architizer Group"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 px-6"
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-[#E0B973] mb-6 uppercase tracking-wide">
            About Global Architizer Group
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light"
          >
            Redefining luxury through timeless architecture, innovative design,
            and master craftsmanship — our legacy lies in every detail we
            create, every skyline we shape.
          </motion.p>
        </motion.div>

        {/* ⬇️ Scroll Arrow */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
          onClick={handleScrollDown}
        >
          <ChevronDown className="text-[#E0B973] w-10 h-10 hover:scale-110 transition-transform duration-300" />
        </motion.div>
      </section>

      {/* 🏛 INTRODUCTION */}
      <section className="py-24 px-6 lg:px-20 bg-[#0A0A0A]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="space-y-8 text-gray-300 text-lg md:text-xl leading-8 font-light text-justify">
            <p>
              At{" "}
              <span className="text-[#E0B973] font-medium">
                Global Architizer Group
              </span>
              , we believe architecture is not just about structures — it’s
              about stories, emotions, and legacies. With an in-house team of
              architects, interior designers, and engineers, we craft spaces
              that are both functional and emotionally resonant.
            </p>

            <p>
              From conceptualization to execution, every project is guided by a
              commitment to precision and purpose. Our integrated approach
              ensures seamless collaboration between design and construction,
              delivering exceptional results that exceed expectations.
            </p>

            <p>
              Headquartered in Kolkata,{" "}
              <span className="text-[#E0B973] font-medium">GAG</span> has
              expanded its footprint across India, setting new benchmarks in
              luxury residential, hospitality, and commercial spaces. Each
              creation is a testament to our pursuit of excellence, innovation,
              and trust.
            </p>

            <p>
              Our mission is simple yet powerful — to make world-class design
              accessible, efficient, and timeless. By merging advanced
              technology with creative brilliance, we bring visions to life that
              inspire generations.
            </p>
          </div>

          {/* 🧾 Download PDF */}
          <motion.a
            href="/files/company-profile.pdf"
            download
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px #E0B973",
            }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 mt-12 px-8 py-3 border border-[#E0B973] text-[#E0B973] rounded-full text-sm uppercase tracking-widest hover:bg-[#E0B973] hover:text-black transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            Download Company Profile
          </motion.a>
        </motion.div>
      </section>

      {/* 📊 METRICS */}
      <section className="relative py-24 bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E0B973]/10 to-transparent pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-12 px-6 text-center"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative flex flex-col items-center justify-center"
            >
              <h3 className="text-[#E0B973] text-6xl md:text-7xl font-semibold drop-shadow-[0_0_10px_rgba(224,185,115,0.3)]">
                {metric.number}
              </h3>
              <p className="text-gray-400 text-sm uppercase tracking-[0.3em] mt-4">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 👥 LEADERSHIP */}
      <section className="bg-[#0A0A0A] text-white py-24 px-6 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#E0B973] text-3xl md:text-4xl font-semibold uppercase text-center mb-16 tracking-wide"
        >
          Our Leadership
        </motion.h2>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/hero-bg.jpg"
              alt="Leadership"
              width={600}
              height={500}
              className="object-cover w-full h-[420px] lg:h-[500px] rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 text-justify space-y-6"
          >
            <p className="text-[#E0B973] italic text-lg md:text-xl leading-relaxed">
              “The function of leadership is to produce more leaders, not more
              followers.”
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              At{" "}
              <span className="text-[#E0B973] font-semibold">
                GAG Developments
              </span>
              , our mission is clear: to connect investors with high-yielding
              opportunities in real estate. We specialize in maximizing returns
              through strategic insight, innovation, and relentless execution.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Through a client-first approach, we empower individuals and
              businesses to navigate the evolving property landscape with
              confidence. Every project we undertake reflects our promise of
              precision, creativity, and enduring value.
            </p>

            {/* <div className="pt-10">
              <Image
                src="/signature.png"
                alt="Signature"
                width={160}
                height={50}
                className="opacity-80"
              />
              <p className="text-sm text-gray-500 mt-2 tracking-widest">
                — Founder, Global Architizer Group
              </p>
            </div> */}
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
