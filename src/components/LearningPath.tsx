"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Target, Calendar } from "lucide-react";

// Data konten berdasarkan kategori
const categoryContent = {
  Essentials: [
    {
      title: "Core Grammar & Vocab",
      lessons: "20",
      level: "A1-A2",
      duration: "2 wks",
      img: "/svg/Graduation-rafiki.svg",
    },
    {
      title: "Daily Conversations",
      lessons: "18",
      level: "A1-B1",
      duration: "3 wks",
      img: "/svg/Kids Studying from Home-rafiki.svg",
    },
    {
      title: "Speaking Practice",
      lessons: "16",
      level: "A1-B1",
      duration: "2 wks",
      img: "/svg/Kindergarten student-cuate.svg",
    },
  ],
  "Exam Prep": [
    {
      title: "IELTS Intensive",
      lessons: "40",
      level: "B2-C1",
      duration: "8 wks",
      img: "/svg/Graduation-rafiki.svg",
    },
    {
      title: "TOEFL Strategy",
      lessons: "35",
      level: "B1-C1",
      duration: "6 wks",
      img: "/svg/Kindergarten student-cuate.svg",
    },
    {
      title: "Duolingo Test Prep",
      lessons: "12",
      level: "A2-B2",
      duration: "2 wks",
      img: "/svg/Kids Studying from Home-rafiki.svg",
    },
  ],
  "Career Focus": [
    {
      title: "Business Writing",
      lessons: "15",
      level: "B1-B2",
      duration: "4 wks",
      img: "/svg/Kids Studying from Home-rafiki.svg",
    },
    {
      title: "Job Interview Prep",
      lessons: "10",
      level: "B1-C1",
      duration: "1 wk",
      img: "/svg/Graduation-rafiki.svg",
    },
    {
      title: "Public Speaking",
      lessons: "20",
      level: "B2-C1",
      duration: "5 wks",
      img: "/svg/Kindergarten student-cuate.svg",
    },
  ],
  "Skill Levels": [
    {
      title: "Beginner (A1)",
      lessons: "50",
      level: "Zero",
      duration: "12 wks",
      img: "/svg/Kindergarten student-cuate.svg",
    },
    {
      title: "Intermediate (B1)",
      lessons: "45",
      level: "A2",
      duration: "10 wks",
      img: "/svg/Kids Studying from Home-rafiki.svg",
    },
    {
      title: "Advanced (C1)",
      lessons: "40",
      level: "B2",
      duration: "10 wks",
      img: "/svg/Graduation-rafiki.svg",
    },
  ],
};

const categories = ["Essentials", "Exam Prep", "Career Focus", "Skill Levels"];

export default function LearningPath() {
  const [activeTab, setActiveTab] = useState("Essentials");

  return (
    <section className="py-24 bg-white">
      {/* Container dipersempit agar tidak terlalu lebar ke samping */}
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-[11px] font-bold uppercase tracking-wider mb-4 font-montserrat">
            Learning Program
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black font-montserrat tracking-tight mb-8">
            Choose Your Learning Path
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-gray-50 rounded-2xl w-fit mx-auto border border-gray-100">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#4F46E5] text-white shadow-md"
                    : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid dengan AnimatePresence agar transisi antar kategori mulus */}
        <div className="grid md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {categoryContent[activeTab as keyof typeof categoryContent].map(
              (path, index) => (
                <motion.div
                  key={`${activeTab}-${index}`}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-[32px] border border-gray-100 p-7 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 rounded-md bg-[#EEF2FF] text-[#4F46E5] text-[10px] font-bold uppercase tracking-wider">
                      {activeTab}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-montserrat text-black leading-tight mb-6 min-h-[3rem]">
                    {path.title}
                  </h3>

                  <div className="flex gap-2 mb-8">
                    <Button className="flex-1 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold h-11 rounded-xl text-xs">
                      Enroll Now
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex-1 bg-gray-50 text-[#4F46E5] font-bold h-11 rounded-xl text-xs"
                    >
                      Details
                    </Button>
                  </div>

                  {/* Stats Section */}
                  <div className="grid grid-cols-3 gap-1 py-4 border-t border-gray-50 border-b mb-6">
                    <div className="flex flex-col items-center gap-1">
                      <BookOpen size={14} className="text-gray-400" />
                      <span className="text-[10px] font-bold text-gray-500 text-center">
                        {path.lessons} Lsn
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1 border-x border-gray-50">
                      <Target size={14} className="text-gray-400" />
                      <span className="text-[10px] font-bold text-gray-500 text-center">
                        {path.level}
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Calendar size={14} className="text-gray-400" />
                      <span className="text-[10px] font-bold text-gray-500 text-center">
                        {path.duration}
                      </span>
                    </div>
                  </div>

                  {/* Illustration Area - Posisi Image disesuaikan acak per kategori */}
                  <div className="mt-auto pt-4 flex justify-center bg-gray-50/50 rounded-2xl overflow-hidden p-4">
                    <Image
                      src={path.img}
                      alt={path.title}
                      width={180}
                      height={120}
                      className="w-full h-auto max-h-[140px] object-contain group-hover:rotate-3 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              ),
            )}
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-[#4F46E5] hover:bg-[#4338CA] px-10 h-14 rounded-2xl font-bold text-base shadow-lg shadow-indigo-100">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
}
