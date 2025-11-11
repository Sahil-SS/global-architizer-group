"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const scrollToForm = () => {
    const section = document.getElementById("contact-form");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-[#0A0A0A] text-white">
      <Navbar />

      {/* 🌆 HERO SECTION */}
      <section className="relative h-[100vh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Contact Global Architizer Group"
            fill
            priority
            className="object-cover opacity-80"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pointer-events-none"></div>

        {/* Text Content */}
        <div className="relative z-10 px-6">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-[#E0B973] italic text-lg md:text-xl mb-4 tracking-wide"
          >
            Let’s Build Something Extraordinary
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-4xl md:text-6xl font-semibold uppercase leading-tight mb-6"
          >
            Get in Touch With <br />
            <span className="text-[#E0B973]">Global Architizer Group</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Whether you’re a client, partner, or investor — our team is here to
            help you turn ideas into reality. Reach out today and start your
            journey with us.
          </motion.p>
        </div>

        {/* Animated Scroll Arrow */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={scrollToForm}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer z-10 group"
        >
          <ChevronDown className="text-[#E0B973] w-10 h-10 group-hover:text-[#ffd67e] transition-colors duration-300" />
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#E0B973]/70 to-transparent mt-2 mx-auto opacity-70 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </section>

      {/* 📞 CONTACT SECTION */}
      <section
        id="contact-form"
        className="py-24 px-6 lg:px-20 relative overflow-hidden"
      >
        {/* Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121212] to-[#0A0A0A]" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* 📝 LEFT SIDE: Elegant Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-[#0A0A0A]/60 p-10 rounded-2xl shadow-[0_0_20px_rgba(224,185,115,0.08)] border border-[#1f1f1f] backdrop-blur-sm"
          >
            <h2 className="text-[#E0B973] text-3xl font-semibold uppercase mb-10 text-center">
              Send Us an Inquiry
            </h2>

            <form className="space-y-8">
              {[
                { label: "Full Name", type: "text", placeholder: "Your Name" },
                {
                  label: "Email Address",
                  type: "email",
                  placeholder: "you@example.com",
                },
                {
                  label: "Phone Number",
                  type: "text",
                  placeholder: "+91 98765 43210",
                },
              ].map((input, i) => (
                <div key={i} className="relative">
                  <label className="block text-sm text-gray-400 mb-2">
                    {input.label}
                  </label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    className="w-full p-3 bg-transparent border-b border-[#2a2a2a] text-gray-200 focus:outline-none focus:border-[#E0B973] transition-all placeholder-gray-500"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 bg-transparent border-b border-[#2a2a2a] text-gray-200 focus:outline-none focus:border-[#E0B973] transition-all placeholder-gray-500 resize-none"
                ></textarea>
              </div>

              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 px-10 py-3 border border-[#E0B973] text-[#E0B973] uppercase tracking-wider rounded-full hover:bg-[#E0B973] hover:text-black transition-all duration-300"
                >
                  Submit Inquiry
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* 🏢 RIGHT SIDE: Office Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <h2 className="text-[#E0B973] text-3xl font-semibold uppercase mb-8 text-center lg:text-left">
              Our Offices
            </h2>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-lg text-[#E0B973] mb-1 font-medium">
                  Kolkata
                </h3>
                <p className="text-sm">
                  RDB Boulevard, Salt Lake, Sec V, Kolkata - 700091
                  <br />
                  356, Jodhpur Park, Jadavpur, Kolkata - 700068
                </p>
              </div>

              <div>
                <h3 className="text-lg text-[#E0B973] mb-1 font-medium">
                  Patna
                </h3>
                <p className="text-sm">
                  401, 4th Floor, Sai Tower, New Dak Bungalow Road, Patna -
                  800001
                </p>
              </div>

              <div>
                <h3 className="text-lg text-[#E0B973] mb-1 font-medium">
                  Howrah
                </h3>
                <p className="text-sm">
                  Factory: Saraswati Complex, Bandara, Domjur, Howrah - 711411
                </p>
              </div>

              <div className="pt-2 border-t border-[#2a2a2a] mt-6">
                <p className="text-sm">
                  <span className="text-[#E0B973] font-medium">Email:</span>{" "}
                  info@globalarchitizergroup.com
                </p>
                <p className="text-sm mt-1">
                  <span className="text-[#E0B973] font-medium">Phone:</span> +91
                  84 369 69 369 | +91 97 4864 9999
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-12 rounded-2xl overflow-hidden border border-[#2a2a2a] hover:border-[#E0B973]/70 transition-all duration-500 shadow-[0_0_20px_rgba(224,185,115,0.05)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.264274332761!2d88.42988837405366!3d22.56917118516521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02772f68b5b4a3%3A0x8a5ef28b9c2a8b65!2sRDB%20Boulevard%2C%20Salt%20Lake%20Sector%20V%2C%20Kolkata%2C%20West%20Bengal%20700091!5e0!3m2!1sen!2sin!4v1731336500000!5m2!1sen!2sin"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
