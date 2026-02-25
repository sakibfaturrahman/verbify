"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  {
    number: 1,
    title: "Quality Education",
    description:
      "We are dedicated to delivering high-quality, expertly crafted courses that ensure effective learning and lasting, impactful real-world results.",
  },
  {
    number: 2,
    title: "Learning for Everyone",
    description:
      "We believe in making language learning accessible to all, regardless of location, background, prior experience, or individual learning goals.",
  },
  {
    number: 3,
    title: "Continuous Improvement",
    description:
      "We evolve our courses and teaching methods to stay current with the latest trends and student needs, ensuring the best learning experience.",
  },
];

export default function Values() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-[11px] font-bold uppercase tracking-wider mb-6 font-montserrat">
            Core Principles
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-black font-montserrat tracking-tight leading-tight">
            The Values <br /> We Believe In
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Sisi Kiri: Ilustrasi dalam Frame Soft */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-12 bg-[#F5F7FF] rounded-[48px] aspect-square flex justify-center items-center overflow-hidden"
          >
            <Image
              src="/svg/Kids Studying from Home-rafiki.svg"
              alt="Values illustration"
              width={450}
              height={450}
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Sisi Kanan: Daftar Nilai */}
          <div className="flex flex-col space-y-12">
            {values.map((val, index) => (
              <motion.div
                key={val.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col space-y-4"
              >
                {/* Badge Nomor dengan Font Hand-drawn Style atau Italic */}
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-xl font-serif italic text-black">
                  {val.number}
                </div>

                <h3 className="text-2xl font-bold font-montserrat text-black tracking-tight">
                  {val.title}
                </h3>

                <p className="text-gray-500 font-sans leading-relaxed text-[15px] max-w-md">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
