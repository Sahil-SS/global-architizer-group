"use client";

import { motion, Variants } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Amit Verma",
      title: "Property Investor — Dubai",
      text: "Working with GAG Developments was a seamless experience. Their attention to detail and commitment to quality surpassed all expectations.",
      image: "/images/client1.jpg",
    },
    {
      name: "Sarah Khan",
      title: "Homeowner — Kolkata",
      text: "They delivered our dream home exactly how we envisioned it. Every element, from design to execution, was handled with excellence.",
      image: "/images/client2.jpg",
    },
    {
      name: "Mohammed Al Fahim",
      title: "Business Owner — Abu Dhabi",
      text: "Professionalism, innovation, and luxury — that’s GAG in a nutshell. Their team ensures each project stands out architecturally.",
      image: "/images/client3.jpg",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full py-20 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        {/* ✨ Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#E0B973] text-3xl md:text-4xl font-semibold uppercase mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Discover why our clients trust us to bring their visions to life —
            from luxury residences to landmark developments.
          </p>
        </motion.div>

        {/* 💬 Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(224,185,115,0.25)",
                borderColor: "#E0B973",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="bg-[#121212] border border-[#2a2a2a] rounded-2xl p-8 relative transition-all duration-300"
            >
              {/* Quotation Mark */}
              <Quote className="absolute top-6 left-6 w-8 h-8 text-[#E0B973] opacity-60" />

              {/* Client Image */}
              <div className="flex justify-center mb-6 mt-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-[#E0B973]/40">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-sm md:text-base italic leading-relaxed mb-6 text-center">
                “{t.text}”
              </p>

              {/* Client Info */}
              <div className="text-center">
                <h3 className="text-[#E0B973] font-semibold text-lg">
                  {t.name}
                </h3>
                <p className="text-gray-500 text-sm">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ✉️ CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 12px #E0B973",
              }}
              transition={{ duration: 0.3 }}
              className="px-10 py-3 border border-[#E0B973] text-[#E0B973] uppercase tracking-widest text-sm font-light rounded-full transition-all duration-300 hover:bg-[#E0B973] hover:text-black"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
