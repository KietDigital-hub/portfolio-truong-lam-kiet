import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { Divider } from "@/components/ui/Divider";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Marquee } from "@/components/sections/Marquee";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { AiProject } from "@/components/sections/AiProject";
import { Achievements } from "@/components/sections/Achievements";
import { Cta } from "@/components/sections/Cta";
import { Faq } from "@/components/sections/Faq";

export default function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="flex-1">
        <Hero />
        <div className="lg:pl-80">
          <Divider />
          <About />
          <Skills />
        </div>
        <Marquee />
        <div className="lg:pl-80">
          <Experience />
        </div>
        <Projects />
        <div className="lg:pl-80">
          <AiProject />
          <Achievements />
          <Cta />
          <Faq />
        </div>
      </main>
      <Footer />
    </>
  );
}
