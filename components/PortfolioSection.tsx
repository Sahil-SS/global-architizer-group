"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Luxury Villa — Dubai Hills",
      image: "/images/portfolio1.jpg",
    },
    {
      title: "Modern Apartment — Kolkata",
      image: "/images/portfolio2.jpg",
    },
    {
      title: "Corporate Tower — Downtown Dubai",
      image: "/images/portfolio3.jpg",
    },
    {
      title: "Residential Complex — Ras Al Khaimah",
      image: "/images/portfolio4.jpg",
    },
    {
      title: "Beachfront Residence — Abu Dhabi",
      image: "/images/portfolio5.jpg",
    },
    {
      title: "Skyline Heights — Mumbai",
      image: "/images/portfolio6.jpg",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#E0B973] text-3xl md:text-4xl font-semibold uppercase mb-4">
            Portfolio
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A glimpse into our finest architectural and interior masterpieces —
            where design meets precision and craftsmanship defines luxury.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <Link key={index} href="/portfolio">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="relative group overflow-hidden rounded-2xl border border-[#1f1f1f] hover:border-[#E0B973] transition-all duration-500"
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={400}
                  className="object-cover w-full h-[280px] lg:h-[340px] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-500"></div>

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-[#E0B973] text-lg md:text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs uppercase tracking-wider">
                    View Details →
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <Link href="/portfolio">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 12px #E0B973",
              }}
              transition={{ duration: 0.3 }}
              className="px-10 py-3 border border-[#E0B973] text-[#E0B973] uppercase tracking-widest text-sm font-light rounded-full transition-all duration-300 hover:bg-[#E0B973] hover:text-black"
            >
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
