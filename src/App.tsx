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
import { useEffect, useState } from "react";
import OpeningModal from "./components/container/Popup/OpeningModal";

function App() {
  const [openOpeningModal, setOpenOpeningModal] = useState(true);

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
      {/* Logo , Navigation , Button Let's Talk */}
      <Header />

      <main className="relative z-0">
        {/*  Your Tech Partner for Smarter Growth  */}
        <HeroSection />

        {/* Trusted by Global Innovators & Leading Brands */}
        <TrustedLogosSection />

        {/* End-to-End IT Solutions That Drive Results */}
        <MetricsSection />

        {/* Our Process */}
        <ProcessSection />

        {/* Smart IT Solutions That Grow With You */}
        <SolutionSection />

        {/* Built for Your Industry */}
        <IndustrySection />

        {/* From Vision to Launch! Projects We’re Proud Of */}
        <ProjectSection />

        {/* What Partners Say About Working With Us */}
        <TestimonialSection />

        {/* Need Help? Start Here. */}
        <FAQSection />

        {/* Ready to Start? Let’s Talk. */}
        <ContactUsSection />

        {/* LET'S DISCUSS YOUR IDEAS */}
        <FooterSection />
      </main>

      {/* Info Modal (only shown in the beginning of application) */}
      <OpeningModal
        open={openOpeningModal}
        onClose={() => setOpenOpeningModal(false)}
      />
    </>
  );
}

export default App;
