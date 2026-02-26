import Hero from "@/components/home/Hero";
import Stats from "@/components/common/Stats";
import LearningPath from "@/components/home/LearningPath";
import Testimonials from "@/components/home/Testimonials";
import Features from "@/components/home/Features";
import CtaSection from "@/components/common/CtaSection";
import Faq from "@/components/common/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <LearningPath />
      <Testimonials />
      <Features />
      <CtaSection />
      <Faq />
    </main>
  );
}
