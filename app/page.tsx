import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Journey } from "@/components/Journey";
import { Creative } from "@/components/Creative";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Services />
      <Projects />
      <Journey />
      <Creative />
      <Contact />
    </>
  );
}
