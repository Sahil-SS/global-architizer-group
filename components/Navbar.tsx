"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-5 bg-transparent"
      >
        {/* Left Section - About Us */}
        <div className="flex-1 flex justify-start">
          <Link
            href="/about"
            className="relative text-sm uppercase tracking-wider text-white transition-all duration-300 hover:text-[#E0B973] hover:drop-shadow-[0_0_6px_#E0B973] group"
          >
            About Us
            <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-[#E0B973] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Center Section - Logo */}
        <div className="flex justify-center items-center">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
            >
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={130}
                height={60}
                className="object-contain"
                priority
              />
            </motion.div>
          </Link>
        </div>

        {/* Right Section - Contact Us + Hamburger */}
        <div className="flex-1 flex justify-end items-center gap-6">
          <Link
            href="/contact"
            className="relative text-sm uppercase tracking-wider text-white transition-all duration-300 hover:text-[#E0B973] hover:drop-shadow-[0_0_6px_#E0B973] group"
          >
            Contact Us
            <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-[#E0B973] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Hamburger Icon */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ rotate: 90, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="text-white focus:outline-none hover:text-[#E0B973] hover:drop-shadow-[0_0_6px_#E0B973]"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-[280px] bg-[#0A0A0A]/95 border-l border-[#2a2a2a] z-40 flex flex-col items-start p-8 shadow-2xl"
          >
            {/* Close Icon */}
            <motion.button
              onClick={() => setIsOpen(false)}
              whileHover={{ rotate: 90 }}
              className="absolute top-6 right-6 text-white hover:text-[#E0B973] transition-all duration-300"
            >
              <X size={26} />
            </motion.button>

            <div className="mt-16 space-y-8 w-full">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact Us", href: "/contact" },
              ].map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-light text-gray-300 uppercase tracking-wide hover:text-[#E0B973] transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer note inside sidebar */}
            <div className="mt-auto text-gray-500 text-xs tracking-widest uppercase">
              © {new Date().getFullYear()} Global Architizer Group
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
