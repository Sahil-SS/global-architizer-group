"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  // 🧠 Show only when at top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 50) setVisible(true);
      else setVisible(false);
    };

    handleScroll(); // run on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🧩 Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const leftLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  const rightLinks = [
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <>
      {/* 🧭 Navbar */}
      <AnimatePresence>
        {visible && (
          <motion.nav
            key="navbar"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }} // smoother easing curve
            className="fixed top-0 left-0 w-full z-50 flex items-center justify-between 
                       px-8 md:px-16 py-4 bg-transparent backdrop-blur-0 transition-all duration-500"
          >
            {/* LEFT SECTION */}
            <div className="flex-1 flex items-center justify-start gap-8">
              {leftLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm uppercase tracking-widest text-gray-300 transition-all duration-300 
                             hover:text-[#E0B973] hover:drop-shadow-[0_0_6px_#E0B973] group hidden sm:block"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-[#E0B973] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* CENTER — LOGO */}
            <div className="flex justify-center items-center flex-shrink-0">
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer"
                >
                  <Image
                    src="/logo.png"
                    alt="Company Logo"
                    width={160}
                    height={70}
                    priority
                    className="object-contain"
                  />
                </motion.div>
              </Link>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex-1 flex justify-end items-center gap-8">
              {rightLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm uppercase tracking-widest text-gray-300 transition-all duration-300 
                             hover:text-[#E0B973] hover:drop-shadow-[0_0_6px_#E0B973] group hidden sm:block"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-[#E0B973] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              {/* CTA */}
              <Link
                href="/contact"
                className="hidden md:inline-block text-sm uppercase tracking-widest px-4 py-2 border border-[#E0B973]/50 
                           rounded-full text-[#E0B973] hover:bg-[#E0B973] hover:text-black transition-all duration-300"
              >
                Let’s Talk
              </Link>

              {/* Hamburger (mobile) */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                className="text-white focus:outline-none hover:text-[#E0B973] transition-all duration-300 md:hidden"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* 🧱 Sidebar Menu (mobile) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-[#0A0A0A] border-l border-[#2a2a2a] 
                         z-50 flex flex-col items-start p-10 shadow-2xl"
            >
              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ rotate: 90 }}
                className="absolute top-6 right-6 text-white hover:text-[#E0B973] transition-all duration-300"
              >
                <X size={26} />
              </motion.button>

              <div className="mt-16 space-y-8 w-full">
                {[...leftLinks, ...rightLinks, { name: "Contact Us", href: "/contact" }].map(
                  (item) => (
                    <motion.div key={item.name} whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-lg font-light text-gray-300 uppercase tracking-wide 
                                   hover:text-[#E0B973] transition-all duration-300"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  )
                )}
              </div>

              <div className="mt-auto text-gray-600 text-xs tracking-widest uppercase pt-10">
                © {new Date().getFullYear()} Global Architizer Group
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
