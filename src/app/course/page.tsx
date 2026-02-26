import CourseHero from "@/components/course/Hero";
import CourseList from "@/components/course/CourseList";
import Faq from "@/components/common/Faq";

const categoryContent = {
  Essentials: [
    {
      title: "Core Grammar & Vocab",
      lessons: "20",
      level: "A1-A2",
      duration: "2 wks",
      img: "/svg/Graduation-rafiki.svg",
    },
    {
      title: "Daily Conversations",
      lessons: "18",
      level: "A1-B1",
      duration: "3 wks",
      img: "/svg/Kids Studying from Home-rafiki.svg",
    },
  ],
  "Exam Prep": [
    {
      title: "IELTS Intensive",
      lessons: "40",
      level: "B2-C1",
      duration: "8 wks",
      img: "/svg/Graduation-rafiki.svg",
    },
    {
      title: "TOEFL Strategy",
      lessons: "35",
      level: "B1-C1",
      duration: "6 wks",
      img: "/svg/Kindergarten student-cuate.svg",
    },
  ],
  "Career Focus": [
    {
      title: "Business Writing",
      lessons: "15",
      level: "B1-B2",
      duration: "4 wks",
      img: "/svg/Kids Studying from Home-rafiki.svg",
    },
    {
      title: "Job Interview Prep",
      lessons: "10",
      level: "B1-C1",
      duration: "1 wk",
      img: "/svg/Graduation-rafiki.svg",
    },
  ],
  "Skill Levels": [
    {
      title: "Beginner (A1)",
      lessons: "50",
      level: "Zero",
      duration: "12 wks",
      img: "/svg/Kindergarten student-cuate.svg",
    },
    {
      title: "Intermediate (B1)",
      lessons: "45",
      level: "A2",
      duration: "10 wks",
      img: "/svg/Kids Studying from Home-rafiki.svg",
    },
    {
      title: "Advanced (C1)",
      lessons: "40",
      level: "B2",
      duration: "10 wks",
      img: "/svg/Graduation-rafiki.svg",
    },
  ],
};

export default function Course() {
  return (
    <main>
      <CourseHero />
      <CourseList categoryContent={categoryContent} />
      <Faq />
    </main>
  );
}
