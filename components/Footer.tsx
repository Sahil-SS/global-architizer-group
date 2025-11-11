"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white py-16 border-t border-[#1f1f1f]">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* 🏢 Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center mb-4">
            <Image
              src="/logo.png"
              alt="Global Architizer Group Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Building excellence across India — from innovative architecture to
            world-class construction, delivering luxury, precision, and trust.
          </p>

          {/* 🌐 Social Links */}
          <div className="flex space-x-4 mt-4">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-[#E0B973] transition-all duration-300" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-[#E0B973] transition-all duration-300" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#E0B973] transition-all duration-300" />
            </Link>
          </div>
        </motion.div>

        {/* 📍 Office Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-[#E0B973] text-lg font-semibold mb-4">
            Our Offices
          </h3>

          <div className="space-y-4 text-sm text-gray-400">
            <div>
              <p className="font-semibold text-white">KOLKATA</p>
              <p>RDB Boulevard, Salt Lake, Sec V.</p>
              <p>Kolkata - 700091</p>
              <p>356, Jodhpur Park, Jadavpur.</p>
              <p>Kolkata - 700068</p>
            </div>

            <div>
              <p className="font-semibold text-white mt-4">PATNA</p>
              <p>401, 4th Floor, Sai Tower,</p>
              <p>New Dak Bungalow Road,</p>
              <p>Patna - 800001</p>
            </div>

            <div>
              <p className="font-semibold text-white mt-4">HOWRAH</p>
              <p>Factory: Saraswati Complex,</p>
              <p>Bandara, Domjur,</p>
              <p>Howrah - 711411</p>
            </div>
          </div>
        </motion.div>

        {/* 📞 Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-[#E0B973] text-lg font-semibold mb-4">
            Contact Us
          </h3>
          <div className="text-gray-400 text-sm space-y-3">
            <div className="flex items-start space-x-3">
              <Mail className="w-4 h-4 text-[#E0B973] mt-0.5" />
              <span>info@globalarchitizergroup.com</span>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="w-4 h-4 text-[#E0B973] mt-0.5" />
              <span>
                +91 84 369 69 369 <br /> +91 97 4864 9999
              </span>
            </div>
          </div>
        </motion.div>

        {/* ✉️ Subscribe / Pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-[#E0B973] text-lg font-semibold mb-4">
            Subscribe
          </h3>
          <form className="flex flex-col space-y-3 mb-6">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#121212] border border-[#2a2a2a] text-gray-300 text-sm px-4 py-2 rounded-md focus:outline-none focus:border-[#E0B973]"
            />
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 12px #E0B973",
              }}
              transition={{ duration: 0.3 }}
              className="bg-transparent border border-[#E0B973] text-[#E0B973] text-sm py-2 rounded-md hover:bg-[#E0B973] hover:text-black transition-all duration-300"
            >
              Subscribe
            </motion.button>
          </form>

          <h3 className="text-[#E0B973] text-lg font-semibold mb-3">Pages</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            {["Home", "About Us", "Portfolio", "Contact"].map((page) => (
              <li key={page}>
                <Link
                  href={`/${page === "Home" ? "" : page.toLowerCase().replace(" ", "")}`}
                  className="hover:text-[#E0B973] transition-colors duration-300"
                >
                  {page}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#1f1f1f] mt-16 pt-6 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Global Architizer Group. All Rights Reserved.
      </div>
    </footer>
  );
}
