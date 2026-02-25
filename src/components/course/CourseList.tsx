"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Target, Calendar } from "lucide-react";

// Data deskripsi untuk sidebar kiri
const categoryMeta = {
  Essentials: { desc: "Master everyday English basics.", icon: "👌" },
  "Exam Prep": { desc: "Prepare for IELTS, TOEFL, and more.", icon: "📋" },
  "Career Focus": { desc: "Professional English for your career.", icon: "💼" },
  "Skill Levels": { desc: "Progressive learning from A1 to C1.", icon: "📈" },
};

export default function CourseList({
  categoryContent,
}: {
  categoryContent: any;
}) {
  const [activeTab, setActiveTab] = useState("Essentials");
  const [showHeaderNav, setShowHeaderNav] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Logika memunculkan Header Nav setelah melewati Hero
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) setShowHeaderNav(true);
    else setShowHeaderNav(false);
  });

  // Logika Deteksi Section Aktif saat Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0px -70% 0px" },
    );

    const sections = document.querySelectorAll(".course-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={containerRef} className="relative bg-white pb-32 font-sans">
      {/* 1. Header Navigation (Muncul saat scroll) sesuai referensi */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: showHeaderNav ? 0 : -100 }}
        className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-[40] border-b border-gray-100 py-4"
      >
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
          <span className="text-xs font-bold text-gray-400 font-montserrat">
            Categories:
          </span>
          <div className="flex gap-8">
            {Object.keys(categoryContent).map((cat) => (
              <button
                key={cat}
                onClick={() => scrollToSection(cat)}
                className={`text-[13px] font-bold transition-all ${
                  activeTab === cat
                    ? "text-[#4F46E5]"
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
          {/* 2. Sticky Sidebar (Kiri) */}
          <aside className="md:w-1/4 h-fit sticky top-32 pt-10">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col space-y-4"
            >
              <span className="text-4xl">
                {categoryMeta[activeTab as keyof typeof categoryMeta].icon}
              </span>
              <h2 className="text-4xl font-extrabold font-montserrat text-black tracking-tight">
                {activeTab}
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed">
                {categoryMeta[activeTab as keyof typeof categoryMeta].desc}
              </p>
            </motion.div>
          </aside>

          {/* 3. Course Sections (Kanan) */}
          <div className="md:w-3/4 space-y-32 pt-10">
            {Object.entries(categoryContent).map(
              ([category, courses]: [string, any]) => (
                <section
                  id={category}
                  key={category}
                  className="course-section scroll-mt-32"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    {courses.map((course: any, idx: number) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-[32px] border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
                      >
                        <div className="flex justify-between items-start mb-6">
                          <span className="px-3 py-1 rounded-md bg-[#EEF2FF] text-[#4F46E5] text-[10px] font-bold uppercase tracking-wider">
                            {category}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold font-montserrat text-black leading-tight mb-8">
                          {course.title}
                        </h3>

                        <div className="flex gap-3 mb-10">
                          <Button className="flex-1 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold h-12 rounded-xl">
                            Enroll Now
                          </Button>
                          <Button
                            variant="ghost"
                            className="flex-1 bg-gray-50 text-[#4F46E5] font-bold h-12 rounded-xl"
                          >
                            Learn More
                          </Button>
                        </div>

                        {/* Info Bar */}
                        <div className="grid grid-cols-3 gap-2 py-6 border-t border-gray-50 border-b mb-8">
                          <div className="flex flex-col items-center gap-1.5 text-center text-gray-400">
                            <BookOpen size={16} />
                            <span className="text-[10px] font-bold text-gray-500">
                              {course.lessons} lessons
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-1.5 text-center text-gray-400 border-x border-gray-50">
                            <Target size={16} />
                            <span className="text-[10px] font-bold text-gray-500">
                              {course.level}
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-1.5 text-center text-gray-400">
                            <Calendar size={16} />
                            <span className="text-[10px] font-bold text-gray-500">
                              {course.duration}
                            </span>
                          </div>
                        </div>

                        {/* Illustration */}
                        <div className="mt-auto bg-gray-50/50 rounded-2xl p-6 flex justify-center">
                          <Image
                            src={course.img}
                            alt={course.title}
                            width={200}
                            height={140}
                            className="w-full h-auto max-h-[160px] object-contain"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
