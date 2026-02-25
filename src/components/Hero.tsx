"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-10 overflow-hidden bg-white">
      <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-[1.2fr_1fr] gap-0 items-center justify-center">
        {/* Sisi Kiri: Teks */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-4 z-10 md:pr-4"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-3 py-1 rounded-md bg-[#EBE9FE] text-[#6366F1] text-[11px] font-bold tracking-tight mb-4">
              Learn Like a Pro
            </span>
            <h1 className="text-5xl md:text-[80px] font-bold text-black leading-[1.1] tracking-[-0.02em]">
              Boost Your <br />
              English Skills
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-500 font-medium max-w-sm"
          >
            Improve your knowledge with expert guidance!
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 pt-4"
          >
            <Button
              size="lg"
              className="bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl px-7 h-14 text-base font-bold transition-all"
            >
              Start Learning <MoveRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-[#EFEEFF] text-[#6366F1] hover:bg-[#E0DEFF] rounded-xl px-7 h-14 text-base font-bold shadow-none"
            >
              Try Free Lesson
            </Button>
          </motion.div>

          {/* Social Proof Sesuai Foto */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 pt-6"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="user"
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
            <p className="text-[13px] text-gray-400 font-semibold">
              Trusted by <span className="text-gray-600">5,000+ learners</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Sisi Kanan: Gambar SVG */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-[500px]"
          >
            <Image
              src="/svg/Taking notes-bro.svg"
              alt="Taking notes illustration"
              width={550}
              height={550}
              priority
              className="w-full h-auto select-none pointer-events-none"
            />
          </motion.div>

          {/* Aksen Biru Halus di belakang gambar */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20">
            <div className="w-[300px] h-[300px] bg-[#6366F1] rounded-full blur-[100px]"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
