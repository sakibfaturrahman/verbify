import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import LearningPath from "@/components/LearningPath";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <LearningPath />
      <Testimonials />
      <Features />
      <Faq />
    </main>
  );
}
