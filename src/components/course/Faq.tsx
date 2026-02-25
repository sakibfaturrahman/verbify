"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = {
  "Course Information": [
    {
      q: "What English levels do you offer?",
      a: "We offer courses ranging from Beginner (A1) to Advanced (C1).",
    },
    {
      q: "How do I choose the right course?",
      a: "You can take our free placement test or consult with our advisors.",
    },
    {
      q: "How long does each course take?",
      a: "Typically 2 weeks to 3 months depending on the intensity.",
    },
    {
      q: "Are the courses suitable for all levels?",
      a: "Yes, we have specialized tracks for every skill level.",
    },
  ],
  "Enrollment & Payment": [
    {
      q: "How do I enroll in a course?",
      a: "Simply click 'Enroll Now' on your chosen course path and follow the instructions.",
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept credit cards, bank transfers, and major e-wallets.",
    },
    {
      q: "Is there a refund policy?",
      a: "Yes, we offer a 7-day money-back guarantee if you are not satisfied.",
    },
    {
      q: "Can I pay in installments?",
      a: "Installment plans are available for our premium long-term courses.",
    },
  ],
  "Technical Support": [
    {
      q: "Can I access the course on mobile?",
      a: "Yes, our platform is fully responsive and works on any device.",
    },
    {
      q: "What are the system requirements?",
      a: "Any modern browser and a stable internet connection will work.",
    },
  ],
};

export default function Faq() {
  const [activeCat, setActiveCat] = useState("Course Information");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveCat(entry.target.id);
        });
      },
      { threshold: 0.5, rootMargin: "-20% 0px -60% 0px" },
    );

    Object.keys(faqCategories).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCat = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 120, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white min-h-screen">
      {/* 1. Hero Section FAQ sesuai referensi */}
      <div className="pt-32 pb-20 container mx-auto px-6 max-w-6xl grid md:grid-cols-2 items-center gap-12 border-b border-gray-100">
        <div>
          <span className="inline-block px-3 py-1 rounded-md bg-[#EEF2FF] text-[#4F46E5] text-[11px] font-bold uppercase tracking-wider mb-6 font-montserrat">
            FAQ
          </span>
          <h1 className="text-5xl md:text-[84px] font-extrabold text-black font-montserrat tracking-tight leading-[1.05] mb-8">
            Clarifying <br /> Your Doubts
          </h1>
          <p className="text-xl text-gray-500 font-medium font-sans">
            Find clear answers to all your questions.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image
            src="/svg/Kids Studying from Home-rafiki.svg"
            alt="FAQ Illustration"
            width={400}
            height={400}
            className="w-full h-auto max-w-[350px]"
          />
        </div>
      </div>

      {/* 2. Sticky Sub-Nav Categories */}
      <div className="sticky top-0 bg-white/90 backdrop-blur-md z-30 border-b border-gray-100 py-4">
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between overflow-x-auto no-scrollbar">
          <span className="text-xs font-bold text-gray-400 font-montserrat whitespace-nowrap mr-8">
            Categories:
          </span>
          <div className="flex gap-8">
            {Object.keys(faqCategories).map((cat) => (
              <button
                key={cat}
                onClick={() => scrollToCat(cat)}
                className={`text-[13px] font-bold whitespace-nowrap transition-all ${
                  activeCat === cat
                    ? "text-[#4F46E5]"
                    : "text-gray-400 hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. FAQ Content Sections */}
      <div className="container mx-auto px-6 max-w-6xl py-24 space-y-32">
        {Object.entries(faqCategories).map(([category, items]) => (
          <section
            id={category}
            key={category}
            className="grid md:grid-cols-[1fr_2fr] gap-12 scroll-mt-32"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold font-montserrat text-black tracking-tighter leading-tight">
              {category}
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {items.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`${category}-${i}`}
                  className="border-none bg-[#F5F7FF]/50 rounded-2xl px-6 py-1 transition-all hover:bg-[#F5F7FF]"
                >
                  <AccordionTrigger className="hover:no-underline font-sans font-bold text-gray-800 text-left py-4">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-gray-500 leading-relaxed pb-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ))}
      </div>
    </section>
  );
}
