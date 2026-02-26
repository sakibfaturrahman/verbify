"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CtaSection from "@/components/common/CtaSection";
import { Mail, PenLine, ShoppingCart, Phone, ExternalLink } from "lucide-react";

const contactMethods = [
  {
    icon: <Mail size={20} />,
    label: "Get Support",
    info: "support@verbify.com",
  },
  {
    icon: <PenLine size={20} />,
    label: "General Inquiries",
    info: "info@verbify.com",
  },
  {
    icon: <ShoppingCart size={20} />,
    label: "Contact Sales",
    info: "sales@verbify.com",
  },
  { icon: <Phone size={20} />, label: "Call Us", info: "+1 800-123-4567" },
];

const socialLinks = ["Discord", "LinkedIn", "X (Twitter)", "Facebook"];

export default function Contact() {
  return (
    <section className="pt-32 pb-24 bg-white font-sans">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20 border-b border-gray-100 pb-16">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 rounded-md bg-[#EEF2FF] text-[#4F46E5] text-[11px] font-bold uppercase tracking-wider mb-6 font-montserrat">
              Contact
            </span>
            <h1 className="text-5xl md:text-[84px] font-extrabold text-black font-montserrat tracking-tight leading-[1.05] mb-8">
              Get in Touch <br /> with Support
            </h1>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Need help? Contact our team, and we'll assist you!
            </p>
          </div>
          <div className="hidden md:flex justify-end">
            <Image
              src="/svg/Kids Studying from Home-rafiki.svg"
              alt="Contact Support"
              width={350}
              height={350}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Main Content: Info & Form */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 mb-24">
          {/* Left Side: Contact Methods */}
          <div className="flex flex-col gap-4">
            {contactMethods.map((method, i) => (
              <div
                key={i}
                className="p-8 bg-[#F5F7FF]/50 border border-gray-100 rounded-[24px] flex flex-col items-center text-center group hover:bg-[#F5F7FF] transition-all"
              >
                <div className="mb-4 text-[#4F46E5] opacity-70 group-hover:opacity-100 transition-opacity">
                  {method.icon}
                </div>
                <h4 className="font-montserrat font-bold text-black text-sm mb-1">
                  {method.label}
                </h4>
                <p className="text-xs font-semibold text-gray-400">
                  {method.info}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side: Form */}
          <div className="p-10 md:p-14 bg-white border border-gray-100 rounded-[40px] shadow-sm">
            <h3 className="text-2xl font-bold font-montserrat text-black mb-10">
              Get In Touch
            </h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Full Name
                </label>
                <Input
                  placeholder="Enter your full name"
                  className="h-14 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Email
                  </label>
                  <Input
                    placeholder="Enter your email"
                    className="h-14 rounded-xl border-gray-100 bg-gray-50/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Phone
                  </label>
                  <Input
                    placeholder="Enter your phone"
                    className="h-14 rounded-xl border-gray-100 bg-gray-50/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us how we can help"
                  className="min-h-[150px] rounded-2xl border-gray-100 bg-gray-50/50 pt-4"
                />
              </div>
              <Button className="w-full h-14 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold rounded-2xl text-base shadow-none">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Follow Us */}
        <div className="text-center">
          <h3 className="text-2xl font-bold font-montserrat text-black mb-12">
            Follow Us
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((social) => (
              <button
                key={social}
                className="flex items-center justify-between p-6 bg-[#F5F7FF]/50 border border-gray-100 rounded-2xl group hover:bg-[#F5F7FF] transition-all"
              >
                <span className="font-bold text-gray-800 text-sm">
                  {social}
                </span>
                <ExternalLink
                  size={16}
                  className="text-gray-300 group-hover:text-black transition-colors"
                />
              </button>
            ))}
          </div>
        </div>
        <CtaSection />
      </div>
    </section>
  );
}
