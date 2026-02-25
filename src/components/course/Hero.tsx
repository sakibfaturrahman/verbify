"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function CourseHero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Sisi Kiri: Teks */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-6"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-3 py-1 rounded-md bg-[#EEF2FF] text-[#4F46E5] text-[11px] font-bold uppercase tracking-wider mb-4 font-montserrat">
                Courses
              </span>
              <h1 className="text-5xl md:text-[84px] font-extrabold text-black leading-[1.05] tracking-[-0.03em] font-montserrat">
                Choose Your <br />
                Ideal Course
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-500 font-medium max-w-md leading-relaxed font-sans"
            >
              Explore courses tailored to your level and goals.
            </motion.p>
          </motion.div>

          {/* Sisi Kanan: Ilustrasi SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center md:justify-end"
          >
            {/* Menggunakan ilustrasi dari folder public/svg/ sesuai referensi */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-[450px]"
            >
              <Image
                src="/svg/Kids Studying from Home-rafiki.svg"
                alt="Courses illustration"
                width={500}
                height={500}
                priority
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Garis Pembatas Halus di Bawah Sesuai Referensi */}
        <div className="mt-20 border-b border-gray-100 w-full" />
      </div>
    </section>
  );
}
