"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
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
                className="bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl px-8 h-14 font-bold shadow-none font-sans transition-all"
              >
                Start Learning <Rocket className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-[#EFEEFF] text-[#4F46E5] hover:bg-[#E0DEFF] rounded-xl px-8 h-14 font-bold shadow-none font-sans transition-all"
              >
                Try Free Lesson
              </Button>
            </div>
          </div>

          {/* Sisi Kanan: Ilustrasi dalam Frame */}
          <div className="relative p-8 md:p-12 bg-[#F5F7FF] rounded-[40px] flex justify-center items-center overflow-hidden border border-indigo-50/50">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/svg/Kids Studying from Home-rafiki.svg"
                alt="Next level illustration"
                width={450}
                height={450}
                className="w-full h-auto select-none pointer-events-none"
              />
            </motion.div>

            {/* Aksen Dekoratif Halus di belakang gambar */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20">
              <div className="w-[300px] h-[300px] bg-[#6366F1] rounded-full blur-[100px]"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
