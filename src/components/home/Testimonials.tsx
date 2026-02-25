"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Quote, MoveRight } from "lucide-react";

const reviews = [
  {
    name: "Budi Santoso",
    level: "Upper-Intermediate",
    duration: "6 Months",
    text: "The IELTS prep course was a game changer. I went from a 5.5 to a 7.0 in just two months. Highly recommend it!",
    avatar: "https://i.pravatar.cc/150?u=budi",
  },
  {
    name: "Siti Aminah",
    level: "Beginner",
    duration: "4 Weeks",
    text: "I struggled with pronunciation for years. This course made me sound natural and confident. Friends noticed immediately!",
    avatar: "https://i.pravatar.cc/150?u=siti",
  },
  {
    name: "Aditya Pratama",
    level: "Intermediate",
    duration: "2 Months",
    text: "I struggled to speak before taking this course. Now, I confidently chat with clients and connect in English every day.",
    avatar: "https://i.pravatar.cc/150?u=aditya",
  },
  {
    name: "Dewi Lestari",
    level: "Advanced",
    duration: "1 Year",
    text: "Verbify helped me secure a position at a multinational company. The business communication module is top-notch!",
    avatar: "https://i.pravatar.cc/150?u=dewi",
  },
  {
    name: "Rizky Ramadhan",
    level: "Intermediate",
    duration: "3 Months",
    text: "The interactive sessions are amazing. I finally understand complex grammar that used to confuse me for years.",
    avatar: "https://i.pravatar.cc/150?u=rizky",
  },
  {
    name: "Putri Handayani",
    level: "Upper-Intermediate",
    duration: "5 Months",
    text: "Learning English here feels so different. The tutors are very supportive and the curriculum is very practical for work.",
    avatar: "https://i.pravatar.cc/150?u=putri",
  },
  {
    name: "Fajar Nugraha",
    level: "Beginner",
    duration: "2 Months",
    text: "I started from zero and now I can introduce myself and have basic conversations fluently. Truly a great platform!",
    avatar: "https://i.pravatar.cc/150?u=fajar",
  },
  {
    name: "Indah Permata",
    level: "Advanced",
    duration: "8 Months",
    text: "Their academic writing module helped me get accepted into my dream university abroad. Thank you, Verbify!",
    avatar: "https://i.pravatar.cc/150?u=indah",
  },
  {
    name: "Eko Prasetyo",
    level: "Intermediate",
    duration: "4 Months",
    text: "The flexible schedule fits perfectly with my busy work life. I can learn whenever I have free time.",
    avatar: "https://i.pravatar.cc/150?u=eko",
  },
  {
    name: "Maya Sari",
    level: "Beginner",
    duration: "3 Weeks",
    text: "Even in just three weeks, my listening skills have improved significantly. The audio materials are very high quality.",
    avatar: "https://i.pravatar.cc/150?u=maya",
  },
  {
    name: "Dedi Kurniawan",
    level: "Upper-Intermediate",
    duration: "7 Months",
    text: "I used to be shy about speaking English, but the community here made me feel brave enough to express my ideas.",
    avatar: "https://i.pravatar.cc/150?u=dedi",
  },
  {
    name: "Lani Wijaya",
    level: "Intermediate",
    duration: "2 Months",
    text: "Excellent materials! The way they explain idioms and slang makes me sound more like a native speaker.",
    avatar: "https://i.pravatar.cc/150?u=lani",
  },
  {
    name: "Hendra Wijaya",
    level: "Advanced",
    duration: "1.5 Years",
    text: "Verbify is the best investment for my self-growth. My vocabulary has expanded significantly since I joined.",
    avatar: "https://i.pravatar.cc/150?u=hendra",
  },
  {
    name: "Nina Kartika",
    level: "Beginner",
    duration: "6 Weeks",
    text: "The learning path is very clear. I always know what to study next and how to track my progress effectively.",
    avatar: "https://i.pravatar.cc/150?u=nina",
  },
  {
    name: "Agus Setiawan",
    level: "Intermediate",
    duration: "4 Months",
    text: "This course really boosted my confidence for international meetings. I don't feel nervous anymore when speaking to foreigners.",
    avatar: "https://i.pravatar.cc/150?u=agus",
  },
];

export default function Testimonials() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      // Menghitung batas drag agar tidak meluncur ke area kosong
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl mb-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 rounded-md bg-[#EEF2FF] text-[#4F46E5] text-[11px] font-bold uppercase tracking-wider mb-4 font-montserrat">
              Real Feedback
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-black font-montserrat tracking-tight leading-tight">
              What Our <br /> Learners Say
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold h-12 rounded-xl px-6 font-sans">
              Start Learning <MoveRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Slider Area - Drag Enabled */}
      <motion.div
        ref={carousel}
        className="cursor-grab active:cursor-grabbing px-6 md:px-[calc((100vw-1152px)/2)]"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="min-w-[350px] md:min-w-[450px] bg-white border border-gray-100 p-8 rounded-[32px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <Quote size={32} className="text-[#EEF2FF] mb-6" />
                <p className="text-lg text-gray-700 font-medium font-sans leading-relaxed mb-8">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 border-2 border-white shadow-sm">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-black text-sm">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-gray-400 font-semibold font-sans uppercase tracking-wide">
                    {review.level} • {review.duration}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
