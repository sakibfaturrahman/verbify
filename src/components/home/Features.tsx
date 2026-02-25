"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Users,
  MessageSquare,
  Settings2,
  Award,
  HeartHandshake,
  Clock,
  Rocket,
} from "lucide-react";

const features = [
  {
    title: "Expert Instructors",
    description:
      "Learn from certified teachers who focus on practical, everyday English.",
    icon: <Users size={32} strokeWidth={1.5} />,
  },
  {
    title: "Real Practice",
    description:
      "Build confidence through real-life conversations and practical exercises.",
    icon: <MessageSquare size={32} strokeWidth={1.5} />,
  },
  {
    title: "Custom Learning",
    description:
      "Tailored courses for every level, from beginner basics to advanced fluency.",
    icon: <Settings2 size={32} strokeWidth={1.5} />,
  },
  {
    title: "Proven Success",
    description:
      "5,000+ students improved their skills and achieved language goals.",
    icon: <Award size={32} strokeWidth={1.5} />,
  },
  {
    title: "Community Support",
    description:
      "Connect with fellow learners, ask questions, and get helpful feedback.",
    icon: <HeartHandshake size={32} strokeWidth={1.5} />,
  },
  {
    title: "Anytime Access",
    description:
      "Study anytime, anywhere, with flexible lessons that fit your schedule.",
    icon: <Clock size={32} strokeWidth={1.5} />,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-[11px] font-bold uppercase tracking-wider mb-6 font-montserrat">
            We're Different
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-black font-montserrat tracking-tight leading-tight">
            The Better <br /> Way to Learn
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-16 mb-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 text-black transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-montserrat text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 font-sans leading-relaxed text-[15px] max-w-[280px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - Sesuai Referensi Gambar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Sisi Kiri: Teks & Button */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-4xl md:text-6xl font-extrabold text-black font-montserrat tracking-tight leading-[1.1]">
              Ready to Reach <br /> the Next Level?
            </h2>
            <p className="text-lg text-gray-500 font-sans max-w-md">
              Move beyond basics – master English with engaging, real-world
              practice!
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Button
                size="lg"
                className="bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl px-8 h-14 font-bold shadow-none"
              >
                Start Learning <Rocket className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-[#EFEEFF] text-[#4F46E5] rounded-xl px-8 h-14 font-bold shadow-none"
              >
                Try Free Lesson
              </Button>
            </div>
          </div>

          {/* Sisi Kanan: Ilustrasi dalam Frame */}
          <div className="relative p-8 md:p-12 bg-[#F5F7FF] rounded-[40px] flex justify-center items-center overflow-hidden">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Gunakan aset SVG yang sesuai, contoh: Video call-bro.svg atau sejenisnya */}
              <Image
                src="/svg/Kids Studying from Home-rafiki.svg"
                alt="Next level illustration"
                width={450}
                height={450}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
