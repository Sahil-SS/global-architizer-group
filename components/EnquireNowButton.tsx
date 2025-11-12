"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, User, MessageSquare } from "lucide-react";

export default function EnquireNowButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("message", formData.message);
      payload.append("access_key", "2756ba83-599a-443a-b5a1-1871d615f0db");
      payload.append("subject", "New Enquiry - Global Architizer Group");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const result = await res.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => {
          setIsOpen(false);
          setStatus("idle");
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-3/4 -translate-y-1/2 bg-[#E0B973] text-black font-semibold px-3 py-3 rounded-l-lg shadow-[0_0_15px_rgba(224,185,115,0.5)] z-50 flex items-center gap-1 hover:bg-[#f0cf90] transition-all duration-300"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ x: -4 }}
      >
        <span className="[writing-mode:vertical-rl] text-sm tracking-widest font-medium">
          Enquire Now
        </span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-[#111111] text-white shadow-2xl z-50 overflow-y-auto border-l border-[#2a2a2a]"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-xl font-semibold text-[#E0B973] tracking-wide uppercase">
                    Enquire Now
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-[#1a1a1a] rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  Fill out the form below and our team will get back to you
                  shortly.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    {
                      label: "Full Name",
                      name: "name",
                      type: "text",
                      icon: (
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      ),
                      placeholder: "Enter your full name",
                    },
                    {
                      label: "Email Address",
                      name: "email",
                      type: "email",
                      icon: (
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      ),
                      placeholder: "your@email.com",
                    },
                    {
                      label: "Phone Number",
                      name: "phone",
                      type: "tel",
                      icon: (
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      ),
                      placeholder: "10-digit phone number",
                    },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs text-gray-400 mb-1">
                        {field.label} *
                      </label>
                      <div className="relative">
                        {field.icon}
                        <input
                          type={field.type}
                          name={field.name}
                          required
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-gray-200 text-sm px-9 py-2 rounded-md focus:border-[#E0B973] focus:ring-1 focus:ring-[#E0B973] outline-none transition"
                        />
                      </div>
                    </div>
                  ))}

                  {/* Message */}
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={3}
                        placeholder="Tell us about your project..."
                        className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-gray-200 text-sm px-9 py-2 rounded-md focus:border-[#E0B973] focus:ring-1 focus:ring-[#E0B973] outline-none transition resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-[#E0B973] text-black font-semibold py-2 rounded-md text-sm tracking-wide hover:bg-[#f0cf90] transition disabled:opacity-50"
                  >
                    {status === "loading" ? "Sending..." : "Submit Enquiry"}
                  </button>

                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-500 text-xs text-center font-medium mt-2"
                    >
                      ✅ Enquiry submitted successfully!
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs text-center font-medium mt-2"
                    >
                      ❌ Something went wrong. Please try again.
                    </motion.p>
                  )}
                </form>

                <div className="mt-8 border-t border-[#2a2a2a] pt-4 text-xs text-gray-500">
                  Email:{" "}
                  <a
                    href="mailto:info@globalarchitizergroup.com"
                    className="text-[#E0B973] hover:underline ml-1"
                  >
                    info@globalarchitizergroup.com
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
