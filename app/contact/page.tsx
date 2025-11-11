"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function ContactPage() {
  return (
    <main className="bg-[#0A0A0A] text-white">
      <Navbar />

      {/* 🌆 HERO SECTION */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/images/contact-hero.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent"></div>

        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#E0B973] text-4xl md:text-6xl font-semibold uppercase mb-4"
          >
            Contact Us
          </motion.h1>
          <p className="text-gray-400 uppercase tracking-widest">
            Get In Touch With Our Team
          </p>
        </div>
      </section>

      {/* 📞 CONTACT SECTION */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* 📝 LEFT SIDE: Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-[#121212] p-10 rounded-2xl shadow-lg border border-[#1f1f1f]"
          >
            <h2 className="text-[#E0B973] text-3xl font-semibold uppercase mb-8">
              Send Us an Inquiry
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-md bg-[#0A0A0A] border border-[#2a2a2a] text-gray-200 focus:outline-none focus:border-[#E0B973] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full p-3 rounded-md bg-[#0A0A0A] border border-[#2a2a2a] text-gray-200 focus:outline-none focus:border-[#E0B973] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                <input
                  type="text"
                  placeholder="+91 98765 43210"
                  className="w-full p-3 rounded-md bg-[#0A0A0A] border border-[#2a2a2a] text-gray-200 focus:outline-none focus:border-[#E0B973] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 rounded-md bg-[#0A0A0A] border border-[#2a2a2a] text-gray-200 focus:outline-none focus:border-[#E0B973] transition-all resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 12px #E0B973",
                }}
                transition={{ duration: 0.3 }}
                className="w-full mt-6 py-3 bg-[#E0B973] text-black font-semibold uppercase rounded-full tracking-wide hover:bg-[#d4a958] transition-all"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>

          {/* 🏢 RIGHT SIDE: Office Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-[#E0B973] text-3xl font-semibold uppercase mb-6">
              Our Offices
            </h2>

            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-lg text-[#E0B973] mb-1">Kolkata:</h3>
                <p className="text-sm leading-relaxed">
                  Rdb Boulevard, Salt Lake, Sec V, Kolkata - 700091 <br />
                  356, Jodhpur Park, Jadavpur, Kolkata - 700068
                </p>
              </div>

              <div>
                <h3 className="text-lg text-[#E0B973] mb-1">Patna:</h3>
                <p className="text-sm leading-relaxed">
                  401, 4th Floor, Sai Tower, New Dak Bungalow Road, Patna - 800001
                </p>
              </div>

              <div>
                <h3 className="text-lg text-[#E0B973] mb-1">Howrah:</h3>
                <p className="text-sm leading-relaxed">
                  Factory: Saraswati Complex, Bandara, Domjur, Howrah - 711411
                </p>
              </div>

              <p className="text-sm leading-relaxed">
                <span className="text-[#E0B973] font-medium">Email:</span>{" "}
                info@globalarchitizergroup.com
              </p>

              <p className="text-sm leading-relaxed">
                <span className="text-[#E0B973] font-medium">Phone:</span> +91 84 369 69 369 | +91 97 4864 9999
              </p>
            </div>

            {/* 🗺 Google Map */}
            <div className="mt-10 rounded-2xl overflow-hidden border border-[#2a2a2a] hover:border-[#E0B973] transition-all duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.264274332761!2d88.42988837405366!3d22.56917118516521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02772f68b5b4a3%3A0x8a5ef28b9c2a8b65!2sRDB%20Boulevard%2C%20Salt%20Lake%20Sector%20V%2C%20Kolkata%2C%20West%20Bengal%20700091!5e0!3m2!1sen!2sin!4v1731336500000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
