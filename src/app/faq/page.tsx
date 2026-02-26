"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
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
  const [showHeaderNav, setShowHeaderNav] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Tinggi Navbar Utama Anda agar tidak tertutup
  const NAVBAR_HEIGHT = "64px";

  // 1. Munculkan Header Nav saat melewati Hero (Logic identik CourseList)
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) setShowHeaderNav(true);
    else setShowHeaderNav(false);
  });

  // 2. Intersection Observer untuk Active Sidebar & Header Tab
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            setActiveCat(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.3],
      },
    );

    const sections = document.querySelectorAll(".faq-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToCat = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 140; // Menyesuaikan tinggi header sticky ganda
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="relative bg-white font-sans">
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 container mx-auto px-6 max-w-6xl grid md:grid-cols-2 items-center gap-12 border-b border-gray-100">
        <div>
          <span className="inline-block px-3 py-1 rounded-md bg-[#EEF2FF] text-[#4F46E5] text-[11px] font-bold uppercase tracking-wider mb-6 font-montserrat">
            FAQ
          </span>
          <h1 className="text-5xl md:text-[84px] font-extrabold text-black font-montserrat tracking-tight leading-[1.05] mb-8">
            Clarifying <br /> Your Doubts
          </h1>
          <p className="text-xl text-gray-500 font-medium max-w-sm leading-relaxed">
            Find clear answers to all your questions about Verbify.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image
            src="/svg/Kids Studying from Home-rafiki.svg"
            alt="FAQ Illustration"
            width={400}
            height={400}
            className="w-full h-auto max-w-[350px]"
            priority
          />
        </div>
      </section>

      {/* 2. STICKY HEADER CATEGORIES (Muncul saat scroll, di bawah Navbar Utama) */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: showHeaderNav ? 0 : -100,
          opacity: showHeaderNav ? 1 : 0,
        }}
        style={{ top: showHeaderNav ? NAVBAR_HEIGHT : "0px" }}
        className="fixed left-0 w-full bg-white/95 backdrop-blur-sm z-[40] border-b border-gray-100 py-4 shadow-sm"
      >
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-montserrat hidden sm:inline">
            FAQ Categories
          </span>
          <div className="flex gap-8 overflow-x-auto no-scrollbar mx-auto sm:mx-0">
            {Object.keys(faqCategories).map((cat) => (
              <button
                key={cat}
                onClick={() => scrollToCat(cat)}
                className={`text-[13px] font-bold whitespace-nowrap transition-all duration-300 ${
                  activeCat === cat
                    ? "text-[#4F46E5] scale-105"
                    : "text-gray-400 hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="flex flex-col md:flex-row gap-12">
          {/* 3. STICKY SIDEBAR (Kiri) */}
          <aside className="md:w-1/4 h-fit sticky top-48 pt-10 hidden md:block">
            <motion.div
              key={activeCat}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col space-y-4"
            >
              <h2 className="text-4xl font-extrabold font-montserrat text-black tracking-tight leading-none">
                {activeCat}
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed max-w-[200px]">
                Everything you need to know about {activeCat.toLowerCase()}.
              </p>
            </motion.div>
          </aside>

          {/* 4. FAQ CONTENT (Kanan) */}
          <div className="md:w-3/4 space-y-32 pt-10 pb-32">
            {Object.entries(faqCategories).map(([category, items]) => (
              <section
                id={category}
                key={category}
                className="faq-section scroll-mt-48"
              >
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-4"
                >
                  {items.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`${category}-${i}`}
                      className="border-none bg-[#F5F7FF]/50 rounded-2xl px-8 py-2 transition-all hover:bg-[#F5F7FF] group"
                    >
                      <AccordionTrigger className="hover:no-underline font-sans font-bold text-gray-800 text-left text-lg py-5">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="font-sans text-gray-500 text-base leading-relaxed pb-6">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
