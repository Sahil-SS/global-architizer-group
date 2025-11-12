"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Ruler, Hammer, Home, Layers, Box, Wrench } from "lucide-react";

export default function WhyChooseGAG() {
  const features = [
    {
      icon: <Ruler className="w-8 h-8 text-[#E0B973]" />,
      title: "Project Planning & Designing",
      desc: "Innovative and detailed project designs balancing functionality with elegance, tailored to client requirements.",
    },
    {
      icon: <Hammer className="w-8 h-8 text-[#E0B973]" />,
      title: "Constructions",
      desc: "From foundation to finish, we deliver quality craftsmanship, structural integrity, and timely delivery.",
    },
    {
      icon: <Home className="w-8 h-8 text-[#E0B973]" />,
      title: "Interior & Exterior Fit Out",
      desc: "We create refined, luxurious spaces that merge form with function across residential and commercial projects.",
    },
    {
      icon: <Layers className="w-8 h-8 text-[#E0B973]" />,
      title: "Glass & ACP Façade Design",
      desc: "Our modern façades redefine aesthetics — combining design brilliance with long-lasting performance.",
    },
    {
      icon: <Box className="w-8 h-8 text-[#E0B973]" />,
      title: "3D Rendering",
      desc: "We visualize your ideas with photorealistic precision before construction even begins.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-[#E0B973]" />,
      title: "MEP Services",
      desc: "Efficient, compliant Mechanical, Electrical, and Plumbing systems for world-class infrastructure.",
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
        {/* 🏗️ Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#E0B973] text-3xl md:text-4xl font-semibold uppercase text-center mb-16"
        >
          Why Choose GAG
        </motion.h2>

        {/* 🏙️ Intro Row */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 text-left"
          >
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
              GAG Developments stands as a symbol of excellence and trust, with
              an expanding portfolio of high-end architectural projects across
              India and the Middle East. Our commitment to precision,
              innovation, and client satisfaction has positioned us among the
              region’s most respected developers.
              <br />
              <br />
              With an in-house team of architects, engineers, and project
              managers, we deliver integrated design and construction solutions
              that meet the highest standards of quality and aesthetics.
            </p>
            {/* ✉️ Contact Button
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
            </motion.div> */}
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 flex justify-center"
          >
            <Image
              src="/images/whychoosegag.jpg"
              alt="Why Choose GAG Developments"
              width={500}
              height={400}
              className="rounded-2xl object-cover"
            />
          </motion.div>
        </div>

        {/* 💡 Advantages Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 0 20px rgba(224,185,115,0.25)",
                borderColor: "#E0B973",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="bg-[#121212] border border-[#2a2a2a] p-8 rounded-2xl text-center transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-[#E0B973] text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
