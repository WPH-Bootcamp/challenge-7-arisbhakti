// import { useEffect } from "react";
import Header from "./components/container/Header/Header";
import HeroSection from "./components/container/HeroSection";
import TrustedLogosSection from "./components/container/TrustedLogosSection";
import MetricsSection from "./components/container/MetricsSection";
import ProcessSection from "./components/container/ProcessSection";
import SolutionSection from "./components/container/SolutionSection";
import IndustrySection from "./components/container/IndustrySection";
import ProjectSection from "./components/container/ProjectSection";
import TestimonialSection from "./components/container/TestimonialSection";
import FAQSection from "./components/container/FAQSection";
import ContactUsSection from "./components/container/ContactUsSection";
import FooterSection from "./components/container/FooterSection";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", media.matches);
    };
    applyTheme();
    media.addEventListener("change", applyTheme);

    return () => {
      media.removeEventListener("change", applyTheme);
    };
  }, []);

  return (
    <>
      <Header />

      <main className="relative z-0">
        <HeroSection></HeroSection>

        <TrustedLogosSection></TrustedLogosSection>

        <MetricsSection></MetricsSection>

        <ProcessSection></ProcessSection>

        <SolutionSection></SolutionSection>

        <IndustrySection></IndustrySection>

        <ProjectSection></ProjectSection>

        <TestimonialSection></TestimonialSection>

        <FAQSection></FAQSection>

        <ContactUsSection></ContactUsSection>

        <FooterSection></FooterSection>
      </main>
    </>
  );
}

export default App;
