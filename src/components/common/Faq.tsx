"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    question: "What English levels do you offer?",
    answer:
      "We offer courses ranging from Beginner (A1) to Advanced (C1), tailored to meet your specific learning goals.",
  },
  {
    question: "How long does each course take?",
    answer:
      "Each course varies, but typically ranges from 2 weeks for intensive modules to 3 months for full-level progression.",
  },
  {
    question: "Are the courses self-paced?",
    answer:
      "We provide a hybrid model: self-paced materials for theory and live interactive sessions for speaking practice.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes, every learner who completes a full course path will receive an official Verbify digital certificate.",
  },
  {
    question: "Can I try a lesson before enrolling?",
    answer:
      "Absolutely! You can sign up for a free demo lesson to experience our methodology before committing.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept major credit cards, bank transfers, and various digital payment methods available in Indonesia.",
  },
  {
    question: "How do I choose the right course?",
    answer:
      "You can take our free placement test or consult with our advisors to find the path that fits your current level.",
  },
  {
    question: "Are the lessons live or recorded?",
    answer:
      "Our core curriculum is recorded for flexibility, but we have daily live speaking clubs with expert mentors.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-[11px] font-bold uppercase tracking-wider mb-6 font-montserrat">
            Ask & Learn
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-black font-montserrat tracking-tight leading-tight">
            Need Help? <br /> Start Here First!
          </h2>
        </div>

        {/* FAQ Grid (Two Columns) */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 items-start">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.slice(0, 4).map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none bg-[#F5F7FF]/50 rounded-2xl px-6 py-1 transition-all hover:bg-[#F5F7FF]"
              >
                <AccordionTrigger className="hover:no-underline font-sans font-bold text-gray-800 text-left py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-gray-500 leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.slice(4).map((faq, index) => (
              <AccordionItem
                key={index + 4}
                value={`item-${index + 4}`}
                className="border-none bg-[#F5F7FF]/50 rounded-2xl px-6 py-1 transition-all hover:bg-[#F5F7FF]"
              >
                <AccordionTrigger className="hover:no-underline font-sans font-bold text-gray-800 text-left py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-gray-500 leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Button className="bg-[#4F46E5] hover:bg-[#4338CA] px-10 h-14 rounded-2xl font-bold text-base shadow-none">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}
