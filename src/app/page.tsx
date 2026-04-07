import { Hero } from "@/components/home/Hero";
import { CorrespondentSection } from "@/components/home/CorrespondentSection";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { KeyPillars } from "@/components/home/KeyPillars";
import { Features } from "@/components/home/Features";
import { StatsCounter } from "@/components/home/StatsCounter";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <CorrespondentSection />
      <AboutSnippet />
      <KeyPillars />
      <Features />
      <StatsCounter />
      <Testimonials />
    </>
  );
}
