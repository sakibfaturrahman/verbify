"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="relative mt-32">
      {/* 1. Quick Action Cards (Floating) */}
      <div className="container mx-auto px-6 max-w-6xl relative z-10 -mb-32">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-[40px] p-10 md:p-14 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="mb-8">
              <img
                src="/svg/Kids Studying from Home-rafiki.svg"
                alt="Courses"
                className="h-32 w-auto"
              />
            </div>
            <h3 className="text-2xl font-bold font-montserrat text-black mb-6">
              Find the Right <br /> Course for You
            </h3>
            <Button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold rounded-xl px-8 h-12 shadow-none">
              Explore Courses
            </Button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[40px] p-10 md:p-14 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="mb-8">
              <img
                src="/svg/Graduation-rafiki.svg"
                alt="About"
                className="h-32 w-auto"
              />
            </div>
            <h3 className="text-2xl font-bold font-montserrat text-black mb-6">
              Who We Are & <br /> Why It Matters
            </h3>
            <Button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold rounded-xl px-8 h-12 shadow-none">
              About Verbify
            </Button>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Content */}
      <div className="bg-[#4F46E5] pt-52 pb-12">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Top Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20">
            <div className="flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="white" />
                <path
                  d="M10 22L16 10L22 22"
                  stroke="#4F46E5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 18H19"
                  stroke="#4F46E5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xl font-montserrat font-extrabold text-white">
                Verbify
              </span>
            </div>

            <div className="flex gap-8">
              {["Courses", "About Us", "FAQ", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="text-white/80 hover:text-white font-sans font-semibold text-sm transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Giant Brand Name */}
          <div className="mb-24 text-center md:text-left">
            <h1 className="text-[12vw] md:text-[180px] font-montserrat font-extrabold text-white leading-none tracking-tighter opacity-100 select-none">
              Verbify
            </h1>
          </div>

          {/* Copyright & Extra Info */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
            <p className="text-white/60 text-[12px] font-sans font-medium">
              © 2026, All Rights Reserved
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-white/60 hover:text-white text-[12px] font-sans font-medium transition-colors"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
