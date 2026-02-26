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
      </div>
    </section>
  );
}
