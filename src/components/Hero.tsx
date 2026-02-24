"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  // Variabel animasi untuk efek stagger (muncul bergantian)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Dekorasi Background Abstrak (Halus) */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#1E3A8A"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.5,81.4,29,72.6,41.4C63.8,53.8,51.8,64.1,38.1,71.5C24.4,78.8,9,83.2,-6.1,83.7C-21.2,84.2,-36.1,80.8,-49.5,73.1C-62.9,65.4,-74.8,53.4,-81.3,39.3C-87.7,25.2,-88.7,9,-86.3,-6.4C-83.9,-21.8,-78.1,-36.4,-68.5,-48.5C-58.9,-60.6,-45.5,-70.2,-31.6,-77.5C-17.7,-84.8,-3.3,-89.8,11.3,-87.9C25.9,-86,30.6,-83.6,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Konten Teks */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-8"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              #1 English Learning Platform in Indonesia
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-semibold text-primary leading-[1.1]">
              Elevate Your Career with{" "}
              <span className="text-secondary">Verbify</span>.
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-lg"
          >
            Bukan sekadar belajar tata bahasa. Kami melatih Anda untuk
            berkomunikasi secara profesional di kancah global dengan kurikulum
            berbasis praktik nyata.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 h-14 text-base"
            >
              Mulai Belajar <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 px-8 h-14 text-base"
            >
              <PlayCircle className="mr-2 h-5 w-5" /> Video Demo
            </Button>
          </motion.div>

          {/* Social Proof (Sederhana) */}
          <motion.div
            variants={itemVariants}
            className="pt-4 border-t border-border w-fit"
          >
            <p className="text-sm text-foreground/60 font-medium">
              Dipercaya oleh mahasiswa dari 100+ universitas, termasuk
              Perjuangan University.
            </p>
          </motion.div>
        </motion.div>

        {/* Visual/Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
              alt="Students learning together"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Elemen Aksen Amber */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-2xl -z-10 animate-pulse"></div>
          <div className="absolute -top-6 -right-6 w-48 h-48 border-4 border-primary/20 rounded-full -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
