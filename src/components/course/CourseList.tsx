"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Target, Calendar } from "lucide-react";

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

  // Tinggi Navbar Utama Anda (Asumsi standar shadcn/minimalist navbar)
  const NAVBAR_HEIGHT = "64px";

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    // Header muncul sedikit lebih cepat setelah scroll melewati Hero
    if (latest > 250) setShowHeaderNav(true);
    else setShowHeaderNav(false);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            setActiveTab(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.3],
      },
    );

    const sections = document.querySelectorAll(".course-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [categoryContent]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset disesuaikan: Tinggi Navbar Utama + Tinggi Header Kategori
      const offset = 140;
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
      {/* HEADER KATEGORI - Diposisikan di bawah Navbar Utama */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: showHeaderNav ? 0 : -20,
          opacity: showHeaderNav ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ top: showHeaderNav ? NAVBAR_HEIGHT : "0px" }} // Menempel di bawah Navbar
        className="fixed left-0 w-full bg-white/95 backdrop-blur-sm z-[40] border-b border-gray-100 py-3 shadow-sm"
      >
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-montserrat hidden sm:inline">
            Categories
          </span>
          <div className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar mx-auto sm:mx-0">
            {Object.keys(categoryContent).map((cat) => (
              <button
                key={cat}
                onClick={() => scrollToSection(cat)}
                className={`text-[13px] font-bold whitespace-nowrap transition-all duration-300 ${
                  activeTab === cat
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
          {/* SIDEBAR STICKY - Jarak top disesuaikan agar tidak tabrakan dengan header baru */}
          <aside className="md:w-1/4 h-fit sticky top-48 pt-10 hidden md:block">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col space-y-4"
            >
              <span className="text-4xl">
                {categoryMeta[activeTab as keyof typeof categoryMeta]?.icon}
              </span>
              <h2 className="text-4xl font-extrabold font-montserrat text-black tracking-tight leading-none">
                {activeTab}
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed max-w-[200px]">
                {categoryMeta[activeTab as keyof typeof categoryMeta]?.desc}
              </p>
            </motion.div>
          </aside>

          {/* CONTENT SECTION */}
          <div className="md:w-3/4 space-y-32 pt-10">
            {Object.entries(categoryContent).map(
              ([category, courses]: [string, any]) => (
                <section
                  id={category}
                  key={category}
                  className="course-section scroll-mt-48" // Offset scroll lebih dalam
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    {courses.map((course: any, idx: number) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -8 }}
                        className="bg-white rounded-[32px] border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
                      >
                        <div className="flex justify-between items-start mb-6">
                          <span className="px-3 py-1 rounded-md bg-[#EEF2FF] text-[#4F46E5] text-[10px] font-bold uppercase tracking-wider">
                            {category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold font-montserrat text-black mb-8 leading-tight">
                          {course.title}
                        </h3>
                        <div className="flex gap-3 mb-10">
                          <Button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold h-12 rounded-xl flex-1">
                            Enroll Now
                          </Button>
                          <Button
                            variant="ghost"
                            className="bg-gray-50 text-[#4F46E5] font-bold h-12 rounded-xl flex-1"
                          >
                            Learn More
                          </Button>
                        </div>
                        <div className="grid grid-cols-3 gap-2 py-6 border-y border-gray-50 mb-8">
                          <div className="flex flex-col items-center gap-1 text-gray-400 text-center">
                            <BookOpen size={16} />
                            <span className="text-[10px] font-bold text-gray-500">
                              {course.lessons} lessons
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-1 border-x border-gray-50 text-gray-400 text-center">
                            <Target size={16} />
                            <span className="text-[10px] font-bold text-gray-500">
                              {course.level}
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-1 text-gray-400 text-center">
                            <Calendar size={16} />
                            <span className="text-[10px] font-bold text-gray-500">
                              {course.duration}
                            </span>
                          </div>
                        </div>
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
