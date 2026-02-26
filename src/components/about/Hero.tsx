"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="relative pt-32 pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header Section Sesuai Referensi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-[11px] font-bold uppercase tracking-wider mb-8 font-montserrat">
            About Us
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-black font-montserrat tracking-tight leading-[1.1] mb-12">
            Verbify offers expert-led English <br className="hidden md:block" />
            courses for all levels, helping you{" "}
            <br className="hidden md:block" />
            build confidence and fluency.
          </h1>
        </motion.div>

        {/* Hero Illustration (Roket) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center mb-24"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-[600px]"
          >
            {/* Menggunakan ilustrasi yang melambangkan visi masa depan/roket */}
            <Image
              src="/svg/Graduation-rafiki.svg"
              alt="Our Vision"
              width={700}
              height={500}
              priority
              className="w-full h-auto"
            />
          </motion.div>

          {/* Aksen Dekoratif Halus */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-30">
            <div className="w-[400px] h-[400px] bg-[#6366F1] rounded-full blur-[120px]"></div>
          </div>
        </motion.div>

        {/* Mission Details (Grid) */}
        <div className="grid md:grid-cols-2 gap-16 items-start border-t border-gray-100 pt-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-montserrat text-black">
              Our Mission is to <br /> Empower Your Voice.
            </h2>
            <p className="text-lg text-gray-500 font-sans leading-relaxed">
              We believe that language shouldn't be a barrier to global
              opportunities. Verbify was founded on the principle that
              practical, real-world English instruction should be accessible,
              engaging, and professional.
            </p>
          </div>

          <div className="space-y-8">
            <div className="p-8 bg-[#F5F7FF] rounded-[32px] border border-indigo-50/50">
              <h3 className="text-xl font-bold font-montserrat text-primary mb-3">
                Expert Guidance
              </h3>
              <p className="text-gray-500 font-sans text-sm leading-relaxed">
                Every curriculum is designed by certified linguists and industry
                experts to ensure you're learning what matters most in the 21st
                century.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                size="lg"
                className="bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl px-8 h-14 font-bold shadow-none"
              >
                Join Our Community <MoveRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
