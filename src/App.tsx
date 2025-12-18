import { useEffect } from "react";
import Header from "./components/container/Header/Header";
import HeroSection from "./components/container/HeroSection";
import TrustedLogosSection from "./components/container/TrustedLogosSection";
import MetricsSection from "./components/container/MetricsSection";
import ProcessSection from "./components/container/ProcessSection";

function App() {
  const toggleProcess = (step: number) => {
    console.log(`Toggling process step: ${step}`);
  };

  // useEffect(() => {
  //   const media = window.matchMedia("(prefers-color-scheme: dark)");

  //   const applyTheme = () => {
  //     document.documentElement.classList.toggle("dark", media.matches);
  //   };

  //   applyTheme(); // apply saat pertama load
  //   media.addEventListener("change", applyTheme);

  //   return () => {
  //     media.removeEventListener("change", applyTheme);
  //   };
  // }, []);

  return (
    <>
      <Header />

      <main className="relative z-0">
        {/* <article id="home" className="flex flex-col md:flex-row">
          <div className="pt-[125px] md:pt-[230px] px-4 md:px-0 md:pl-35 flex flex-col gap-10 md:w-[653px] h-auto z-10">
            <div className="flex flex-col gap-2 md:w-[653px]">
              <h1 className="font-bold text-4xl md:text-[56px] leading-11 md:leading-17 tracking-[-0.72px] md:tracking-[-0.02em] text-[var(--neutral-25)]">
                Your Tech Partner for
                <span className="text-[#FF6C37]">Smarter Growth</span>
              </h1>
              <p className="bitcount-single font-semibold text-base md:text-xl leading-7.5 md:leading-8.5 text-[var(--neutral-25)]">
                We deliver tailored IT solutions to help you scale with speed
                and confidence.
              </p>
            </div>
            <button className="contactus-button w-full md:w-50 h-12 leading-7.5 p-2 gap-1 rounded-full font-bold bg-[#FF623E] text-base shadow-[inset_4px_4px_4px_0_rgba(255,255,255,0.25)] text-white transition-all duration-300 hover:brightness-110 active:scale-95 cursor-pointer">
              Let's Talk
            </button>
          </div>
          <div
            id="phone-div"
            className="relative pt-[43px] md:pt-0 md:top-0 z-0 md:w-1/2 md:ml-auto"
          >
            <img
              id="phone-header-light"
              className="block dark:hidden w-full md:w-full h-auto object-contain z-0 translate-x-[3px]"
              src="./images/phone-header-light.svg"
              alt="Phone Header Light"
            />

            <img
              id="phone-header-dark"
              className="hidden dark:block w-full md:w-full h-auto object-contain z-0"
              src="./images/phone-header-new.svg"
              alt="Phone Header Dark"
            />
            <div></div>
          </div>
        </article> */}
        <HeroSection></HeroSection>
        {/* <article id="about" className="flex flex-col mt-[43px] px-4 md:px-35">
          <p className="font-bold text-center text-base md:text-2xl leading-7.5 md:leading-9 text-neutral-25">
            Trusted by Global Innovators & Leading Brands
          </p>
          <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="h-32 md:h-50 py-10 flex w-max animate-marquee gap-16 will-change-transform group-hover:[animation-play-state:paused]">
              <ul className="flex items-center gap-16">
                <li>
                  <img
                    className="company-logo mix-blend-luminosity"
                    src="./images/company-logo/adobe.svg"
                    alt="Adobe"
                  />
                </li>
                <li>
                  <img
                    className="company-logo"
                    src="./images/company-logo/airbnb.svg"
                    alt="Airbnb"
                  />
                </li>
                <li>
                  <img
                    className="company-logo"
                    src="./images/company-logo/databricks.svg"
                    alt="Databricks"
                  />
                </li>
                <li>
                  <img
                    className="company-logo"
                    src="./images/company-logo/dropbox.svg"
                    alt="Dropbox"
                  />
                </li>
                <li>
                  <img
                    className="company-logo"
                    src="./images/company-logo/netflix.svg"
                    alt="Netflix"
                  />
                </li>
                <li>
                  <img
                    className="company-logo"
                    src="./images/company-logo/paypal.svg"
                    alt="PayPal"
                  />
                </li>
                <li>
                  <img
                    className="company-logo"
                    src="./images/company-logo/postman.svg"
                    alt="Postman"
                  />
                </li>
                <li>
                  <img
                    className="company-logo"
                    src="./images/company-logo/upwork.svg"
                    alt="Upwork"
                  />
                </li>
                <li>
                  <img
                    className="company-logo"
                    src="./images/company-logo/zoom.svg"
                    alt="Zoom"
                  />
                </li>
              </ul>

              <ul className="flex items-center gap-16" aria-hidden="true">
                <li>
                  <img
                    className="company-logo"
                    src="./images/company-logo/adobe.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="company-logo"
                    src="./images/company-logo/airbnb.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="company-logo"
                    src="./images/company-logo/databricks.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="company-logo"
                    src="./images/company-logo/dropbox.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="company-logo"
                    src="./images/company-logo/netflix.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="company-logo"
                    src="./images/company-logo/paypal.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="company-logo"
                    src="./images/company-logo/postman.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="company-logo"
                    src="./images/company-logo/upwork.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="company-logo"
                    src="./images/company-logo/zoom.svg"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </article> */}
        <TrustedLogosSection></TrustedLogosSection>
        {/* <article className="flex flex-col text-[var(--neutral-25)] px-4 md:px-35 py-20 gap-6 md:gap-16">
          <header className="flex flex-col gap-[11px]">
            <h2 className="text-center font-bold tracking-[-0.02em] text-[28px] leading-11 md:text-5xl md:leading-14.5">
              End-to-End IT Solutions That Drive Results
            </h2>

            <p className="text-center text-sm md:text-lg leading-7 md:leading-8 text-[var(--neutral-400)] mx-auto">
              From strategy to execution, we deliver solutions that grow your
              business.
            </p>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
            <div className="metric-card">
              <span className="metric-value">50+</span>
              <span className="metric-label mt-2">Projects Delivered</span>
            </div>

            <div className="metric-card">
              <span className="metric-value">5+</span>
              <span className="metric-label mt-2">Years of Experience</span>
            </div>

            <div className="metric-card">
              <span className="metric-value">10+</span>
              <span className="metric-label mt-2">Industry Awards Won</span>
            </div>

            <div className="metric-card">
              <span className="metric-value">100%</span>
              <span className="metric-label mt-2">
                Client Satisfaction Rate
              </span>
            </div>
          </div>
        </article> */}
        <MetricsSection></MetricsSection>
        {/* <article
          id="process"
          className="flex flex-col gap-6 md:gap-16 py-10 px-4 md:py-20 md:px-35"
        >
          <header className="flex flex-col gap-[11px]">
            <h2 className="text-center font-bold tracking-[-0.02em] text-[28px] leading-14 md:text-[40px] md:leading-9.5">
              Our Process
            </h2>

            <p className="text-center text-sm md:text-lg leading-7 md:leading-8 text-[var(--neutral-400)] max-w-[920px] mx-auto">
              From strategy to execution, we deliver solutions that grow your
              business.
            </p>
          </header>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row-reverse md:flex-row gap-3 md:gap-6">
              <div
                className="our-process-card"
                id="our-process-card-1"
                onClick={() => toggleProcess(1)}
              >
                <div className="relative flex flex-col flex-1">
                  <h3 className="text-base md:text-xl font-bold leading-7.5 md:leading-8.5 tracking-[-0.02em]">
                    Discovery & Consultation
                  </h3>
                  <p
                    id="our-process-content-1"
                    className="text-sm md:text-base font-medium leading-7 md:leading-7.5 text-[var(--neutral-400)]"
                  >
                    Understand Your Needs & Goals
                  </p>
                </div>
                <div className="flex items-start justify-center">
                  <svg
                    id="button-arrow-up-1"
                    viewBox="0 0 14 8"
                    className="w-4.5 h-[9px] mt-[12px] stroke-[var(--neutral-25)] dark:stroke-[var(--neutral-25)]"
                  >
                    <path
                      d="M13 7L7 1L1 7"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <svg
                    id="button-down-up-1"
                    viewBox="0 0 14 8"
                    className="hidden w-4.5 h-[9px] mt-[12px] stroke-[var(--neutral-25)] dark:stroke-[var(--neutral-25)]"
                  >
                    <path
                      d="M1 1L7 7L13 1"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-1 justify-center-center items-center flex-shrink-0 flex-grow-0">
                <div className="relative flex justify-center items-center bg-[var(--primary-200)] w-10 h-10 md:w-12 md:h-12 mx-auto rounded-full flex-shrink-0 text-white font-bold tracking-1 md:tracking-[-0.02em] text-xs md:text-base leading-6 md:leading-7.5 timeline-line">
                  1
                </div>
              </div>
              <div className="hidden relative md:flex flex-row flex-1 p-4 md:p-6 gap-1 text-left rounded-2xl border-[var(--neutral-0)] border-[1px]"></div>
            </div>
            <div className="flex flex-row md:flex-row gap-3 md:gap-6">
              <div className="hidden relative md:flex flex-row flex-1 p-4 md:p-6 gap-1 text-left rounded-2xl border-[var(--neutral-0)] border-[1px]"></div>
              <div className="flex flex-1 justify-center-center items-center flex-shrink-0 flex-grow-0">
                <div className="relative flex justify-center items-center bg-[var(--primary-200)] w-10 h-10 md:w-12 md:h-12 mx-auto rounded-full flex-shrink-0 text-white font-bold tracking-1 md:tracking-[-0.02em] text-xs md:text-base leading-6 md:leading-7.5 timeline-line">
                  2
                </div>
              </div>
              <div
                className="our-process-card"
                id="our-process-card-2"
                onClick={() => toggleProcess(2)}
              >
                <div className="relative flex flex-col flex-1">
                  <h3 className="text-base md:text-xl font-bold leading-7.5 md:leading-8.5 tracking-[-0.02em]">
                    Planning & Strategy
                  </h3>
                  <p
                    id="our-process-content-2"
                    className="text-sm md:text-base font-medium leading-7 md:leading-7.5 text-[var(--neutral-400)]"
                  >
                    Build a Clear, Scalable Roadmap
                  </p>
                </div>
                <div className="flex items-start justify-center">
                  <svg
                    id="button-arrow-up-2"
                    viewBox="0 0 14 8"
                    className="w-4.5 h-[9px] mt-[12px] stroke-[var(--neutral-25)] dark:stroke-[var(--neutral-25)]"
                  >
                    <path
                      d="M13 7L7 1L1 7"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <svg
                    id="button-down-up-2"
                    viewBox="0 0 14 8"
                    className="hidden w-4.5 h-[9px] mt-[12px] stroke-[var(--neutral-25)] dark:stroke-[var(--neutral-25)]"
                  >
                    <path
                      d="M1 1L7 7L13 1"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse md:flex-row gap-3 md:gap-6">
              <div
                className="our-process-card"
                id="our-process-card-3"
                onClick={() => toggleProcess(3)}
              >
                <div className="relative flex flex-col flex-1">
                  <h3 className="text-base md:text-xl font-bold leading-7.5 md:leading-8.5 tracking-[-0.02em]">
                    Design & Prototyping
                  </h3>
                  <p
                    id="our-process-content-3"
                    className="text-sm md:text-base font-medium leading-7 md:leading-7.5 text-[var(--neutral-400)]"
                  >
                    Craft UX That Converts
                  </p>
                </div>
                <div className="flex items-start justify-center">
                  <svg
                    id="button-arrow-up-3"
                    viewBox="0 0 14 8"
                    className="w-4.5 h-[9px] mt-[12px] stroke-[var(--neutral-25)] dark:stroke-[var(--neutral-25)]"
                  >
                    <path
                      d="M13 7L7 1L1 7"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <svg
                    id="button-down-up-3"
                    viewBox="0 0 14 8"
                    className="hidden w-4.5 h-[9px] mt-[12px] stroke-[var(--neutral-25)] dark:stroke-[var(--neutral-25)]"
                  >
                    <path
                      d="M1 1L7 7L13 1"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-1 justify-center-center items-center flex-shrink-0 flex-grow-0">
                <div className="relative flex justify-center items-center bg-[var(--primary-200)] w-10 h-10 md:w-12 md:h-12 mx-auto rounded-full flex-shrink-0 text-white font-bold tracking-1 md:tracking-[-0.02em] text-xs md:text-base leading-6 md:leading-7.5 timeline-line">
                  3
                </div>
              </div>
              <div className="hidden relative md:flex flex-row flex-1 p-4 md:p-6 gap-1 text-left rounded-2xl border-[var(--neutral-0)] border-[1px]"></div>
            </div>
            <div className="flex flex-row md:flex-row gap-3 md:gap-6">
              <div className="hidden relative md:flex flex-row flex-1 p-4 md:p-6 gap-1 text-left rounded-2xl border-[var(--neutral-0)] border-[1px]"></div>
              <div className="flex flex-1 justify-center-center items-center flex-shrink-0 flex-grow-0">
                <div className="relative flex justify-center items-center bg-[var(--primary-200)] w-10 h-10 md:w-12 md:h-12 mx-auto rounded-full flex-shrink-0 text-white font-bold tracking-1 md:tracking-[-0.02em] text-xs md:text-base leading-6 md:leading-7.5 timeline-line">
                  4
                </div>
              </div>
              <div
                className="our-process-card"
                id="our-process-card-4"
                onClick={() => toggleProcess(4)}
              >
                <div className="relative flex flex-col flex-1">
                  <h3 className="text-base md:text-xl font-bold leading-7.5 md:leading-8.5 tracking-[-0.02em]">
                    Development & Implementation
                  </h3>
                  <p
                    id="our-process-content-4"
                    className="text-sm md:text-base font-medium leading-7 md:leading-7.5 text-[var(--neutral-400)]"
                  >
                    Deliver With Speed & Precision
                  </p>
                </div>
                <div className="flex items-start justify-center">
                  <svg
                    id="button-arrow-up-4"
                    viewBox="0 0 14 8"
                    className="w-4.5 h-[9px] mt-[12px] stroke-[var(--neutral-25)] dark:stroke-[var(--neutral-25)]"
                  >
                    <path
                      d="M13 7L7 1L1 7"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <svg
                    id="button-down-up-4"
                    viewBox="0 0 14 8"
                    className="hidden w-4.5 h-[9px] mt-[12px] stroke-[var(--neutral-25)] dark:stroke-[var(--neutral-25)]"
                  >
                    <path
                      d="M1 1L7 7L13 1"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse md:flex-row gap-3 md:gap-6">
              <div
                className="our-process-card"
                id="our-process-card-5"
                onClick={() => toggleProcess(5)}
              >
                <div className="relative flex flex-col flex-1">
                  <h3 className="text-base md:text-xl font-bold leading-7.5 md:leading-8.5 tracking-[-0.02em]">
                    Testing & Optimization
                  </h3>
                  <p
                    id="our-process-content-5"
                    className="text-sm md:text-base font-medium leading-7 md:leading-7.5 text-[var(--neutral-400)]"
                  >
                    Ensure Quality at Every Step
                  </p>
                </div>
                <div className="flex items-start justify-center">
                  <svg
                    id="button-arrow-up-5"
                    viewBox="0 0 14 8"
                    className="w-4.5 h-[9px] mt-[12px] stroke-[var(--neutral-25)] dark:stroke-[var(--neutral-25)]"
                  >
                    <path
                      d="M13 7L7 1L1 7"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <svg
                    id="button-down-up-5"
                    viewBox="0 0 14 8"
                    className="hidden w-4.5 h-[9px] mt-[12px] stroke-[var(--neutral-25)] dark:stroke-[var(--neutral-25)]"
                  >
                    <path
                      d="M1 1L7 7L13 1"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-1 justify-center-center items-center flex-shrink-0 flex-grow-0">
                <div className="relative flex justify-center items-center bg-[var(--primary-200)] w-10 h-10 md:w-12 md:h-12 mx-auto rounded-full flex-shrink-0 text-white font-bold tracking-1 md:tracking-[-0.02em] text-xs md:text-base leading-6 md:leading-7.5 timeline-line">
                  5
                </div>
              </div>
              <div className="hidden relative md:flex flex-row flex-1 p-4 md:p-6 gap-1 text-left rounded-2xl border-[var(--neutral-0)] border-[1px]"></div>
            </div>
            <div className="flex flex-row md:flex-row gap-3 md:gap-6">
              <div className="hidden relative md:flex flex-row flex-1 p-4 md:p-6 gap-1 text-left rounded-2xl border-[var(--neutral-0)] border-[1px]"></div>
              <div className="flex flex-1 justify-center-center items-center flex-shrink-0 flex-grow-0">
                <div className="relative flex justify-center items-center bg-[var(--primary-200)] w-10 h-10 md:w-12 md:h-12 mx-auto rounded-full flex-shrink-0 text-white font-bold tracking-1 md:tracking-[-0.02em] text-xs md:text-base leading-6 md:leading-7.5">
                  6
                </div>
              </div>
              <div
                className="our-process-card"
                id="our-process-card-6"
                onClick={() => toggleProcess(6)}
              >
                <div className="relative flex flex-col flex-1">
                  <h3 className="text-base md:text-xl font-bold leading-7.5 md:leading-8.5 tracking-[-0.02em]">
                    Launch & Growth
                  </h3>
                  <p
                    id="our-process-content-6"
                    className="text-sm md:text-base font-medium leading-7 md:leading-7.5 text-[var(--neutral-400)]"
                  >
                    Scale, Measure & Improve Continuously
                  </p>
                </div>
                <div className="flex items-start justify-center">
                  <svg
                    id="button-arrow-up-6"
                    viewBox="0 0 14 8"
                    className="w-4.5 h-[9px] mt-[12px] stroke-[var(--neutral-25)] dark:stroke-[var(--neutral-25)]"
                  >
                    <path
                      d="M13 7L7 1L1 7"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <svg
                    id="button-down-up-6"
                    viewBox="0 0 14 8"
                    className="hidden w-4.5 h-[9px] mt-[12px] stroke-[var(--neutral-25)] dark:stroke-[var(--neutral-25)]"
                  >
                    <path
                      d="M1 1L7 7L13 1"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </article> */}
        <ProcessSection></ProcessSection>
        <article
          id="services"
          className="flex flex-col gap-10 md:gap-16 py-10 px-4 md:py-20 md:px-35"
        >
          <header className="flex flex-col gap-[11px] text-center">
            <h2 className="font-semibold text-[28px] leading-9.5 md:text-[40px] md:leading-14 tracking-[-0.02em]">
              Smart IT Solutions That Grow With You
            </h2>
            <p className="font-medium text-sm leading-7 text-[var(--neutral-400)]">
              Tailored tech to boost efficiency, security, and results.
            </p>
          </header>
          <div className="flex flex-col gap-10">
            <div className="first-row flex flex-col md:flex-row gap-10 md:gap-5">
              <article className="solution-content">
                <img
                  src="./images/solutions/web.svg"
                  className="absolute top-[-21px] left-[20px] w-16 h-16 md:w-20 md:h-20 md:top-[-26px]"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-base md:text-xl leading-7.5 md:leading-8.5 tracking-[-0.02em] md:tracking-1">
                    Web Development
                  </h3>
                  <p className="font-medium text-[var(--neutral-400)] text-sm md:text-base leading-7 md:leading-7.5">
                    Build fast, scalable, and SEO-friendly websites.
                  </p>
                </div>
              </article>
              <article className="solution-content">
                <img
                  src="./images/solutions/mobile.svg"
                  className="absolute top-[-21px] left-[20px] w-16 h-16 md:w-20 md:h-20 md:top-[-26px]"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-base md:text-xl leading-7.5 md:leading-8.5 tracking-[-0.02em] md:tracking-1">
                    Mobile App Development
                  </h3>
                  <p className="font-medium text-[var(--neutral-400)] text-sm md:text-base leading-7 md:leading-7.5">
                    Native & cross-platform apps tailored to user needs.
                  </p>
                </div>
              </article>
              <article className="solution-content">
                <img
                  src="./images/solutions/ui.svg"
                  className="absolute top-[-21px] left-[20px] w-16 h-16 md:w-20 md:h-20 md:top-[-26px]"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-base md:text-xl leading-7.5 md:leading-8.5 tracking-[-0.02em] md:tracking-1">
                    UI/UX Design
                  </h3>
                  <p className="font-medium text-[var(--neutral-400)] text-sm md:text-base leading-7 md:leading-7.5">
                    Delight users with intuitive and beautiful interfaces
                  </p>
                </div>
              </article>
            </div>
            <div className="first-row flex flex-col md:flex-row gap-10 md:gap-5">
              <article className="solution-content">
                <img
                  src="./images/solutions/cloud.svg"
                  className="absolute top-[-21px] left-[20px] w-16 h-16 md:w-20 md:h-20 md:top-[-26px]"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-base md:text-xl leading-7.5 md:leading-8.5 tracking-[-0.02em] md:tracking-1">
                    Cloud Solutions
                  </h3>
                  <p className="font-medium text-[var(--neutral-400)] text-sm md:text-base leading-7 md:leading-7.5">
                    Build fast, scalable, and SEO-friendly websites.
                  </p>
                </div>
              </article>
              <article className="solution-content">
                <img
                  src="./images/solutions/software.svg"
                  className="absolute top-[-21px] left-[20px] w-16 h-16 md:w-20 md:h-20 md:top-[-26px]"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-base md:text-xl leading-7.5 md:leading-8.5 tracking-[-0.02em] md:tracking-1">
                    Software Development
                  </h3>
                  <p className="font-medium text-[var(--neutral-400)] text-sm md:text-base leading-7 md:leading-7.5">
                    Custom solutions built around your business logic.
                  </p>
                </div>
              </article>
              <article className="solution-content">
                <img
                  src="./images/solutions/infrastructure.svg"
                  className="absolute top-[-21px] left-[20px] w-16 h-16 md:w-20 md:h-20 md:top-[-26px]"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-base md:text-xl leading-7.5 md:leading-8.5 tracking-[-0.02em] md:tracking-1">
                    IT Infrastructure
                  </h3>
                  <p className="font-medium text-[var(--neutral-400)] text-sm md:text-base leading-7 md:leading-7.5">
                    Scale your backend with reliable tech foundations.
                  </p>
                </div>
              </article>
            </div>
            <div className="first-row flex flex-col md:flex-row gap-10 md:gap-5">
              <article className="solution-content">
                <img
                  src="./images/solutions/cybersecurity.svg"
                  className="absolute top-[-21px] left-[20px] w-16 h-16 md:w-20 md:h-20 md:top-[-26px]"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-base md:text-xl leading-7.5 md:leading-8.5 tracking-[-0.02em] md:tracking-1">
                    Cybersecurity Services
                  </h3>
                  <p className="font-medium text-[var(--neutral-400)] text-sm md:text-base leading-7 md:leading-7.5">
                    Stay protected with enterprise-grade security.
                  </p>
                </div>
              </article>
              <article className="solution-content">
                <img
                  src="./images/solutions/qa.svg"
                  className="absolute top-[-21px] left-[20px] w-16 h-16 md:w-20 md:h-20 md:top-[-26px]"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-base md:text-xl leading-7.5 md:leading-8.5 tracking-[-0.02em] md:tracking-1">
                    QA Solutions
                  </h3>
                  <p className="font-medium text-[var(--neutral-400)] text-sm md:text-base leading-7 md:leading-7.5">
                    Ensure performance with rigorous testing frameworks.
                  </p>
                </div>
              </article>
              <article className="solution-content">
                <img
                  src="./images/solutions/consulting.svg"
                  className="absolute top-[-21px] left-[20px] w-16 h-16 md:w-20 md:h-20 md:top-[-26px]"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-base md:text-xl leading-7.5 md:leading-8.5 tracking-[-0.02em] md:tracking-1">
                    IT Consulting & Support
                  </h3>
                  <p className="font-medium text-[var(--neutral-400)] text-sm md:text-base leading-7 md:leading-7.5">
                    Make smarter tech decisions with expert guidance.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </article>
        <article className="flex flex-col gap-6 md:gap-16 px-4 py-10 md:px-35 md:py-20">
          <header className="flex flex-col gap-[11px] text-left">
            <h2 className="font-bold text-[32px] md:text-[40px] leading-10.5 md:leading-14 tracking-[-0.02em]">
              Built for Your Industry
            </h2>
            <p className="font-medium text-sm md:text-lg leading-7 md:leading-8 text-neutral-400">
              We’ve helped companies across industries launch smarter, faster,
              and more securely.
            </p>
          </header>
          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <nav className="flex flex-col flex-1">
              <ul className="flex flex-col gap-3 md:gap-6 flex-1">
                <li className="list-none">
                  <a
                    id="fintech-menu"
                    className="active cursor-pointer built-industry-menu border-l-[3px] border-solid border-[var(--neutral-600)] pl-1.5 md:pl-2 font-bold text-base md:text-xl leading-7.5 md:leading-8.5 tracking-[-0.02em] md:tracking-1 text-neutral-600"
                  >
                    Fintech
                  </a>
                </li>
                <li className="list-none">
                  <a
                    id="ecommerce-menu"
                    className="cursor-pointer built-industry-menu border-l-[3px] border-solid border-[var(--neutral-600)] pl-1.5 md:pl-2 font-bold text-base md:text-xl leading-7.5 md:leading-8.5 tracking-[-0.02em] md:tracking-1 text-neutral-600"
                  >
                    E-Commerce
                  </a>
                </li>
                <li className="list-none">
                  <a
                    id="healthcare-menu"
                    className="cursor-pointer built-industry-menu border-l-[3px] border-solid border-[var(--neutral-600)] pl-1.5 md:pl-2 font-bold text-base md:text-xl leading-7.5 md:leading-8.5 tracking-[-0.02em] md:tracking-1 text-neutral-600"
                  >
                    Healthcare
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col flex-4">
              <div id="fintech" className="">
                <div className="flex flex-col gap-5">
                  <p className="font-medium text-sm md:text-lg leading-7 md:leading-8">
                    We build secure, scalable, and compliant fintech solutions —
                    from digital wallets to core banking systems — tailored to
                    modern financial needs.
                  </p>
                  <img src="./images/industry/fintech.svg" alt="" />
                </div>
              </div>
              <div id="ecommerce" className="hidden">
                <div className="flex flex-col gap-5">
                  <p className="font-medium text-sm md:text-lg leading-7 md:leading-8">
                    Boost your online sales with fast, reliable platforms
                    designed for seamless shopping experiences, inventory
                    management, and payment integration.
                  </p>
                  <img src="./images/industry/e-commerce.svg" alt="" />
                </div>
              </div>
              <div id="healthcare" className="hidden">
                <div className="flex flex-col gap-5">
                  <p className="font-medium text-sm md:text-lg leading-7 md:leading-8">
                    Empowering healthcare providers with digital solutions that
                    improve patient care, ensure data privacy, and streamline
                    operational workflows.
                  </p>
                  <img src="./images/industry/healthcare.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </article>
        <section
          id="projects"
          className="flex flex-col gap-6 px-4 py-10 md:gap-16 md:py-20 md:px-35"
        >
          <header className="flex flex-col gap-[11px] justify-center text-center">
            <h2 className="font-bold text-[28px] leading-9.5 tracking-[-0.02em] md:text-[40px] md:leading-14">
              From Vision to Launch! Projects We’re Proud Of
            </h2>
            <p className="font-medium text-neutral-400 text-sm leading-7 md:text-lg md:leading-8">
              Take a closer look at our recent work powering startups,
              enterprises, and everything in between.
            </p>
          </header>
          <div className="flex flex-col md:flex-row gap-5">
            <article className="flex flex-col flex-1 gap-2 md:gap-3">
              <img
                src="./images/portofolio/porto1.svg"
                className="w-full"
                alt=""
              />
              <div className="flex flex-col">
                <h3 className="font-medium text-primary-200 text-sm leading-7 md:text-base md:leading-7.5">
                  Landing Page
                </h3>
                <p className="font-bold text-base leading-7.5 tracking-[-0.02em] md:text-xl md:leading-8.5 md:tracking-1">
                  Portofolio 1
                </p>
              </div>
            </article>
            <article className="flex flex-col flex-1 gap-2 md:gap-3">
              <img
                src="./images/portofolio/porto2.svg"
                className="w-full"
                alt=""
              />
              <div className="flex flex-col">
                <h3 className="font-medium text-primary-200 text-sm leading-7 md:text-base md:leading-7.5">
                  Landing Page
                </h3>
                <p className="font-bold text-base leading-7.5 tracking-[-0.02em] md:text-xl md:leading-8.5 md:tracking-1">
                  Portofolio 2
                </p>
              </div>
            </article>
            <article className="flex flex-col flex-1 gap-2 md:gap-3">
              <img
                src="./images/portofolio/porto3.svg"
                className="w-full"
                alt=""
              />
              <div className="flex flex-col">
                <h3 className="font-medium text-primary-200 text-sm leading-7 md:text-base md:leading-7.5">
                  Landing Page
                </h3>
                <p className="font-bold text-base leading-7.5 tracking-[-0.02em] md:text-xl md:leading-8.5 md:tracking-1">
                  Portofolio 3
                </p>
              </div>
            </article>
          </div>
        </section>
        <article
          id="testimonials"
          className="overflow-hidden relative md:w-full md:overflow-x-hidden flex flex-col py-10 gap-12 md:py-20 md:gap-20 text-center px-4 justify-center items-center"
        >
          <div
            id="gradient-image-left"
            className="pointer-events-none hidden md:block absolute inset-0 z-10 bg-[linear-gradient(to_right,var(--neutral-0)_0%,rgba(0,0,0,0)_40%)]"
          ></div>
          <div
            id="gradient-image-right"
            className="pointer-events-none hidden md:block absolute inset-0 z-10 bg-[linear-gradient(to_left,var(--neutral-0)_0%,rgba(0,0,0,0)_40%)]"
          ></div>

          <header className="flex flex-col gap-[11px]">
            <h2 className="font-bold text-[28px] leading-9.5 tracking-[-0.02em] text-neutral-25 md:text-[40px] md:leading-14 z-30">
              What Partners Say About Working With Us
            </h2>
            <p className="text-sm leading-7 font-medium text-neutral-400 md:text-lg md:leading-8 z-30">
              Trusted voices. Real experiences. Proven results.
            </p>
          </header>

          <div className="md:w-fit md:relative">
            <div className="md:flex gap-5 relative" id="what-partners-say">
              <figure className="cursor-pointer partner-content transition-all duration-300 hidden relative md:flex flex-col bg-neutral-950 rounded-2xl pt-4 pl-4 pr-4 pb-12 gap-4 md:gap-6 md:pt-6 md:pl-6 md:pr-6 md:pb-12 border-[1px] border-[var(--neutral-900)] md:w-[594px]">
                <img
                  src="./images/partners/john.svg"
                  className="w-[60px] h-15 absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[-25px] md:w-[75px] md:h-[75px] md:-translate-y-[-45px]"
                  alt=""
                />
                <figcaption className="flex flex-col gap-3 relative">
                  <img
                    src="./images/partners/quote.svg"
                    className="w-16 h-16 absolute top-[-50px] left-[3px] md:w-20 md:h-20 md:left-[27px] md:top-[-66px]"
                    alt=""
                  />
                  <div className="flex justify-center items-center gap-1">
                    <img
                      src="./images/partners/star-filled.svg"
                      className="w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/partners/star-filled.svg"
                      className="w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/partners/star-filled.svg"
                      className="w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/partners/star-filled.svg"
                      className="w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/partners/star-filled.svg"
                      className="w-6 h-6"
                      alt=""
                    />
                  </div>
                  <p className="font-semibold text-sm leading-7 md:text-lg md:leading-8 text-neutral-25">
                    “Working with this team was a game-changer for our project.
                    They understood our vision and turned it into reality
                    efficiently and effectively.”
                  </p>
                </figcaption>
                <div className="flex flex-col">
                  <h2 className="font-semibold text-sm leading-7 md:text-lg md:leading-8 text-neutral-25">
                    John Lee
                  </h2>
                  <p className="font-semibold text-sm leading-7 md:text-lg md:leading-8 text-primary-200">
                    Creative Director at Innovate Corp
                  </p>
                </div>
              </figure>
              <figure className="cursor-pointer partner-content transition-all duration-300 relative flex flex-col bg-neutral-950 rounded-2xl pt-4 pl-4 pr-4 pb-12 gap-4 md:gap-6 md:pt-6 md:pl-6 md:pr-6 md:pb-12 border-[1px] border-[var(--neutral-900)] md:w-[594px]">
                <img
                  src="./images/partners/sarah.svg"
                  className="w-[60px] h-15 absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[-25px] md:w-[75px] md:h-[75px] md:-translate-y-[-45px]"
                  alt=""
                />
                <figcaption className="flex flex-col gap-3 relative">
                  <img
                    src="./images/partners/quote.svg"
                    className="w-16 h-16 absolute top-[-50px] left-[3px] md:w-20 md:h-20 md:left-[27px] md:top-[-66px]"
                    alt=""
                  />
                  <div className="flex justify-center items-center gap-1">
                    <img
                      src="./images/partners/star-filled.svg"
                      className="w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/partners/star-filled.svg"
                      className="w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/partners/star-filled.svg"
                      className="w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/partners/star-filled.svg"
                      className="w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/partners/star-filled.svg"
                      className="w-6 h-6"
                      alt=""
                    />
                  </div>
                  <p className="font-semibold text-sm leading-7 md:text-lg md:leading-8 text-neutral-25">
                    “The team delivered exactly what we needed — on time and
                    with outstanding quality. Their attention to detail and
                    communication were top-notch.”
                  </p>
                </figcaption>
                <div className="flex flex-col">
                  <h2 className="font-semibold text-sm leading-7 md:text-lg md:leading-8 text-neutral-25">
                    Sarah Tan
                  </h2>
                  <p className="font-semibold text-sm leading-7 md:text-lg md:leading-8 text-primary-200">
                    Product Manager at Finovate
                  </p>
                </div>
              </figure>
              <figure className="cursor-pointer partner-content transition-all duration-300 hidden md:visible relative md:flex flex-col bg-neutral-950 rounded-2xl pt-4 pl-4 pr-4 pb-12 gap-4 md:gap-6 md:pt-6 md:pl-6 md:pr-6 md:pb-12border-[1px] border-[var(--neutral-900)] md:w-[594px]">
                <img
                  src="./images/partners/emily.svg"
                  className="w-[60px] h-15 absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[-25px] md:w-[75px] md:h-[75px] md:-translate-y-[-45px]"
                  alt=""
                />
                <figcaption className="flex flex-col gap-3 relative">
                  <img
                    src="./images/partners/quote.svg"
                    className="w-16 h-16 absolute top-[-50px] left-[3px] md:w-20 md:h-20 md:left-[27px] md:top-[-66px]"
                    alt=""
                  />
                  <div className="flex justify-center items-center gap-1">
                    <img
                      src="./images/partners/star-filled.svg"
                      className="w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/partners/star-filled.svg"
                      className="w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/partners/star-filled.svg"
                      className="w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/partners/star-filled.svg"
                      className="w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/partners/star-filled.svg"
                      className="w-6 h-6"
                      alt=""
                    />
                  </div>
                  <p className="font-semibold text-sm leading-7 md:text-lg md:leading-8 text-neutral-25">
                    “The collaboration was seamless, and the results surpassed
                    our expectations. Their expertise transformed our ideas into
                    a successful product.”
                  </p>
                </figcaption>
                <div className="flex flex-col">
                  <h2 className="font-semibold text-sm leading-7 md:text-lg md:leading-8 text-neutral-25">
                    Emily Chen
                  </h2>
                  <p className="font-semibold text-sm leading-7 md:text-lg md:leading-8 text-primary-200">
                    Marketing Head at Tech Solutions
                  </p>
                </div>
              </figure>
            </div>
          </div>

          <div>
            <img src="./images/dark-pagination.svg" alt="" />
          </div>
        </article>

        <article
          id="faq"
          className="flex flex-col py-10 px-4 gap-6 md:py-20 md:px-30 md:gap-12"
        >
          <header className="flex flex-col md:flex-row gap-4 md:justify-between">
            <h2 className="font-bold text-[28px] leading-9.5 tracking-[-0.02em] md:text-[40px] md:leading-14 text-neutral-25 md:w-[331px]">
              Need Help? Start Here.
            </h2>
            <p className="font-medium text-sm leading-7 text-neutral-400 md:text-lg md:leading-8 md:w-[245px] flex flex-col md:items-end md:justify-end">
              Everything you need to know — all in one place.
            </p>
          </header>
          <hr className="border-[var(--neutral-800)]" />
          <div className="flex flex-col md:flex-row gap-6 md:gap-[73px] justify-between">
            <div className="flex flex-col gap-7 w-full">
              <details
                className="flex flex-col gap-4 menu-hover cursor-pointer"
                id="faq-1"
              >
                <summary className="flex justify-between">
                  <h3 className="font-bold text-lg md:text-2xl leading-8 md:leading-9 text-neutral-25">
                    What services do you offer?
                  </h3>

                  <div className="hidden dark:block">
                    <img
                      src="./images/minus-icon.svg"
                      className="faq-minus-1 hidden w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/plus-icon.svg"
                      className="faq-plus-1 w-6 h-6"
                      alt=""
                    />
                  </div>
                  <div className="block dark:hidden">
                    <img
                      src="./images/minus-icon-white.svg"
                      className="faq-minus-1 hidden w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/plus-icon-white.svg"
                      className="faq-plus-1 w-6 h-6"
                      alt=""
                    />
                  </div>
                </summary>
                <p
                  id="paragraph-faq-1"
                  className="hidden font-medium text-sm leading-7 text-neutral-400 md:text-xl md:leading-8.5"
                >
                  We provide custom web/app development, cloud solutions, UX/UI
                  design, and more.
                </p>
              </details>
              <hr className="border-[var(--neutral-800)]" />
              <details
                className="flex flex-col gap-4 menu-hover cursor-pointer"
                id="faq-2"
              >
                <summary className="flex justify-between">
                  <h3 className="font-bold text-lg md:text-2xl leading-8 md:leading-9 text-neutral-25">
                    How do I know if this is right for my business?
                  </h3>
                  <div className="hidden dark:block">
                    <img
                      src="./images/minus-icon.svg"
                      className="faq-minus-2 hidden w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/plus-icon.svg"
                      className="faq-plus-2 w-6 h-6"
                      alt=""
                    />
                  </div>
                  <div className="block dark:hidden">
                    <img
                      src="./images/minus-icon-white.svg"
                      className="faq-minus-2 hidden w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/plus-icon-white.svg"
                      className="faq-plus-2 w-6 h-6"
                      alt=""
                    />
                  </div>
                </summary>
                <p
                  id="paragraph-faq-2"
                  className="hidden font-medium text-sm leading-7 text-neutral-400 md:text-xl md:leading-8.5"
                >
                  Book a free consult — we’ll assess your goals and recommend
                  the right approach.
                </p>
              </details>
              <hr className="border-[var(--neutral-800)]" />
              <details
                className="flex flex-col gap-4 menu-hover cursor-pointer"
                id="faq-3"
              >
                <summary className="flex justify-between">
                  <h3 className="font-bold text-lg md:text-2xl leading-8 md:leading-9 text-neutral-25">
                    How much does a project cost?
                  </h3>

                  <div className="hidden dark:block">
                    <img
                      src="./images/minus-icon.svg"
                      className="faq-minus-3 hidden w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/plus-icon.svg"
                      className="faq-plus-3 w-6 h-6"
                      alt=""
                    />
                  </div>
                  <div className="block dark:hidden">
                    <img
                      src="./images/minus-icon-white.svg"
                      className="faq-minus-3 hidden w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/plus-icon-white.svg"
                      className="faq-plus-3 w-6 h-6"
                      alt=""
                    />
                  </div>
                </summary>
                <p
                  id="paragraph-faq-3"
                  className="hidden font-medium text-sm leading-7 text-neutral-400 md:text-xl md:leading-8.5"
                >
                  Every project is different. Let’s talk about your needs to get
                  a tailored estimate.
                </p>
              </details>
              <hr className="border-[var(--neutral-800)]" />
              <details
                className="flex flex-col gap-4 menu-hover cursor-pointer"
                id="faq-4"
              >
                <summary className="flex justify-between">
                  <h3 className="font-bold text-lg md:text-2xl leading-8 md:leading-9 text-neutral-25">
                    How long does it take?
                  </h3>
                  <div className="hidden dark:block">
                    <img
                      src="./images/minus-icon.svg"
                      className="faq-minus-4 hidden w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/plus-icon.svg"
                      className="faq-plus-4 w-6 h-6"
                      alt=""
                    />
                  </div>
                  <div className="block dark:hidden">
                    <img
                      src="./images/minus-icon-white.svg"
                      className="faq-minus-4 hidden w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/plus-icon-white.svg"
                      className="faq-plus-4 w-6 h-6"
                      alt=""
                    />
                  </div>
                </summary>
                <p
                  id="paragraph-faq-4"
                  className="hidden font-medium text-sm leading-7 text-neutral-400 md:text-xl md:leading-8.5"
                >
                  Depends on scope — but we always prioritize quality and
                  deadlines.
                </p>
              </details>
              <hr className="border-[var(--neutral-800)]" />
              <details
                className="flex flex-col gap-4 menu-hover cursor-pointer"
                id="faq-5"
              >
                <summary className="flex justify-between">
                  <h3 className="font-bold text-lg md:text-2xl leading-8 md:leading-9 text-neutral-25">
                    Can I start with a small project first?
                  </h3>
                  <div className="hidden dark:block">
                    <img
                      src="./images/minus-icon.svg"
                      className="faq-minus-5 hidden w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/plus-icon.svg"
                      className="faq-plus-5 w-6 h-6"
                      alt=""
                    />
                  </div>
                  <div className="block dark:hidden">
                    <img
                      src="./images/minus-icon-white.svg"
                      className="faq-minus-5 hidden w-6 h-6"
                      alt=""
                    />
                    <img
                      src="./images/plus-icon-white.svg"
                      className="faq-plus-5 w-6 h-6"
                      alt=""
                    />
                  </div>
                </summary>
                <p
                  id="paragraph-faq-5"
                  className="hidden font-medium text-sm leading-7 text-neutral-400 md:text-xl md:leading-8.5"
                >
                  Absolutely. We often begin with MVPs or pilot projects.
                </p>
              </details>
            </div>
            <aside className="w-full md:w-[329px] h-fit md:shrink-0 md:grow-0 bg-[var(--primary-300)] rounded-2xl flex flex-col gap-4 px-5 py-5 text-left md:gap-6 md:px-6 md:py-6">
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-[28px] leading-9.5 tracking-[-0.02em] text-white md:text-4xl md:leading-11">
                  Let’s talk it through
                </h3>
                <p className="font-semibold text-sm leading-7 text-white md:text-lg md:leading-8">
                  book a free consultation with our team.
                </p>
              </div>
              <img
                src="./images/consultation.svg"
                className="h-[175.21px] md:h-[153.38px] w-full"
                alt=""
              />
              <button className="flex gap-1 p-2 rounded-full bg-[var(--neutral-1000)] text-[var(--neutral-0)] justify-center items-center font-bold text-base leading-7.5 tracking-[-0.02em] h-11 md:h-12">
                Free Consultation
              </button>
            </aside>
          </div>
        </article>
        <article
          id="contactus"
          className="flex flex-col px-4 pt-10 pb-0 md:px-35 md:py-20 justify-center items-center"
        >
          <div className="flex flex-col gap-6 md:gap-12 md:w-180">
            <header className="flex flex-col gap-4">
              <h2 className="font-bold text-[28px] leading-9.5 tracking-[-0.02em] md:text-[40px] md:leading-14 text-neutral-25 text-center">
                Ready to Start? Let’s Talk.
              </h2>
              <p className="font-medium text-sm leading-7 text-neutral-400 text-center md:text-lg md:leading-8">
                Tell us what you need, and we’ll get back to you soon.
              </p>
            </header>
            <form action="" className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="font-bold text-sm leading-7 text-neutral-25"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="px-4 py-2 border-[1px] border-[var(--neutral-800)] rounded-[12px] h-12 placeholder-[color:var(--neutral-500)] placeholder:text-sm placeholder:leading-7 md:placeholder:text-base md:placeholder:leading-7 hover:border hover:border-[var(--primary-200)] focus:border-[3px] focus:border-[var(--primary-200)] focus:outline-none"
                    autoComplete="name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="font-bold text-sm leading-7 text-neutral-25"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 border-[1px] border-[var(--neutral-800)] rounded-[12px] h-12 placeholder-[color:var(--neutral-500)] placeholder:text-sm placeholder:leading-7 md:placeholder:text-base md:placeholder:leading-7 hover:border hover:border-[var(--primary-200)] focus:border-[3px] focus:border-[var(--primary-200)] focus:outline-none"
                    autoComplete="email"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="font-bold text-sm leading-7 text-neutral-25"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    className="px-4 py-2 border-[1px] border-[var(--neutral-800)] rounded-[12px] h-33.5 placeholder-[color:var(--neutral-500)] placeholder:text-sm placeholder:leading-7 md:placeholder:text-base md:placeholder:leading-7 hover:border hover:border-[var(--primary-200)] focus:border-[3px] focus:border-[var(--primary-200)] focus:outline-none"
                  ></textarea>
                </div>

                <div className="flex flex-col gap-3.5">
                  <label className="font-bold text-sm leading-7 text-neutral-25">
                    Services
                  </label>
                  <div className="flex flex-col md:flex-row md:gap-[37px] gap-4">
                    <div className="flex flex-col gap-3.5 md:gap-4">
                      <div className="flex gap-3 items-center">
                        <input
                          type="checkbox"
                          id="web"
                          name="web"
                          value="web"
                          className="custom-checkbox"
                        />

                        <label
                          htmlFor="web"
                          className="font-medium leading-7 text-sm md:leading-7.5 md:text-base cursor-pointer"
                        >
                          Web Development
                        </label>
                      </div>
                      <div className="flex gap-3 items-center">
                        <input
                          type="checkbox"
                          id="mobile"
                          name="mobile"
                          value="mobile"
                          className="custom-checkbox"
                        />
                        <label
                          htmlFor="mobile"
                          className="font-medium leading-7 text-sm md:leading-7.5 md:text-base cursor-pointer"
                        >
                          Mobile App Development
                        </label>
                      </div>
                      <div className="flex gap-3 items-center">
                        <input
                          type="checkbox"
                          id="ui"
                          name="ui"
                          value="ui"
                          className="custom-checkbox"
                        />
                        <label
                          htmlFor="ui"
                          className="font-medium leading-7 text-sm md:leading-7.5 md:text-base cursor-pointer"
                        >
                          UI/UX Design
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3.5 md:gap-4">
                      <div className="flex gap-3 items-center">
                        <input
                          type="checkbox"
                          id="cloud"
                          name="cloud"
                          value="cloud"
                          className="custom-checkbox"
                        />
                        <label
                          htmlFor="cloud"
                          className="font-medium leading-7 text-sm md:leading-7.5 md:text-base cursor-pointer"
                        >
                          Cloud Solutions
                        </label>
                      </div>
                      <div className="flex gap-3 items-center">
                        <input
                          type="checkbox"
                          id="software"
                          name="software"
                          value="software"
                          className="custom-checkbox"
                        />
                        <label
                          htmlFor="software"
                          className="font-medium leading-7 text-sm md:leading-7.5 md:text-base cursor-pointer"
                        >
                          Software Development
                        </label>
                      </div>
                      <div className="flex gap-3 items-center">
                        <input
                          type="checkbox"
                          id="other"
                          name="other"
                          value="other"
                          className="custom-checkbox"
                        />
                        <label
                          htmlFor="other"
                          className="font-medium leading-7 text-sm md:leading-7.5 md:text-base cursor-pointer"
                        >
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                id="button-send"
                className="md:flex items-center justify-center w-full h-11 md:h-12 p-2 gap-1 rounded-full bg-[#FF623E] shadow-[inset_4px_4px_4px_0_rgba(255,255,255,0.25)] text-white transition-all duration-300 hover:brightness-110 active:scale-95 cursor-pointer font-bold text-sm md:text-base md:leading-7.5 tracking-[-0.02em] leading-7"
              >
                Send
              </button>
              <div
                id="live"
                className="sr-only"
                aria-live="polite"
                aria-atomic="true"
              ></div>
            </form>
          </div>
        </article>
        <footer className="flex flex-col py-6 px-4 md:py-10 md:px-35">
          <div className="flex flex-col bg-neutral-950 gap-6 px-5 py-5 rounded-3xl border-[1px] border-[var(--neutral-800)] md:gap-15 md:py-10 md:px-10">
            <header className="flex flex-col md:flex-row-reverse gap-6 md:justify-between items-start">
              <div className="flex flex-row gap-[8.53px] md:gap-[9.6px]">
                <img
                  src="./images/main-logo.svg"
                  className="md:w-[29.59px] md:h-[32.46px] w-[26.3px] h-[28.85px]"
                  alt=""
                />
                <p className="font-bold text-[21.9px] leading-[31.8px] md:text-2xl md:leading-9 text-[var(--neutral-1000)]">
                  Your Logo
                </p>
              </div>
              <h2 className="font-bold text-[28px] leading-9.5 tracking-[-0.02em] w-[281px] md:text-4xl md:leading-11 text-neutral-25">
                LET'S DISCUSS YOUR IDEAS
              </h2>
            </header>
            <hr className="border-[var(--neutral-800)]" />

            <div className="flex flex-col md:flex-row gap-6 md:justify-between md:items-center">
              <nav
                aria-label="footer"
                className="flex flex-col md:flex-row gap-2 md:gap-0"
              >
                <a href="#about" className="menu-hover menu-footer">
                  About
                </a>
                <a href="#services" className="menu-hover menu-footer">
                  Service
                </a>
                <a href="#projects" className="menu-hover menu-footer">
                  Projects
                </a>
                <a href="#testimonials" className="menu-hover menu-footer">
                  Testimonials
                </a>
                <a href="#faq" className="menu-hover menu-footer">
                  FAQ
                </a>
              </nav>

              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="w-10 h-10 border-[1px] border-[var(--neutral-800)] rounded-full flex justify-center items-center"
                >
                  <svg
                    id="icon-facebook-1"
                    viewBox="0 0 11 21"
                    className="w-4.5 h-4.5 text-[var(--neutral-25)]"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M10.0933 11.2593L10.6632 7.63821H7.15251V5.28451C7.15251 4.29437 7.64264 3.32687 9.20992 3.32687H10.8285V0.243291C9.88591 0.0929833 8.93348 0.0116671 7.97889 0C5.08939 0 3.20295 1.73699 3.20295 4.87714V7.63821H0V11.2593H3.20295V20.0178H7.15251V11.2593H10.0933Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="w-10 h-10 border-[1px] border-[var(--neutral-800)] rounded-full flex justify-center items-center"
                >
                  <svg
                    id="icon-instagram-1"
                    viewBox="0 0 21 21"
                    className="w-4.5 h-4.5 text-[var(--neutral-25)]"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M6.6712 10.0089C6.6712 8.16637 8.16402 6.67233 10.006 6.67233C11.848 6.67233 13.3416 8.16637 13.3416 10.0089C13.3416 11.8514 11.848 13.3455 10.006 13.3455C8.16402 13.3455 6.6712 11.8514 6.6712 10.0089ZM4.86804 10.0089C4.86804 12.8474 7.1683 15.1483 10.006 15.1483C12.8437 15.1483 15.144 12.8474 15.144 10.0089C15.144 7.17037 12.8437 4.86944 10.006 4.86944C7.1683 4.86944 4.86804 7.17037 4.86804 10.0089ZM14.1466 4.66566C14.1465 4.90321 14.2169 5.13545 14.3487 5.33302C14.4806 5.53059 14.6681 5.68461 14.8874 5.7756C15.1068 5.86659 15.3482 5.89048 15.5811 5.84423C15.8141 5.79798 16.0281 5.68367 16.1961 5.51577C16.3641 5.34786 16.4785 5.1339 16.5249 4.90093C16.5713 4.66797 16.5477 4.42646 16.4569 4.20696C16.3661 3.98746 16.2123 3.79981 16.0148 3.66776C15.8174 3.53571 15.5853 3.46517 15.3478 3.46508H15.3474C15.029 3.46523 14.7238 3.59175 14.4987 3.81686C14.2735 4.04196 14.1469 4.34725 14.1466 4.66566ZM5.96358 18.1559C4.98803 18.1114 4.45779 17.9489 4.10542 17.8116C3.63826 17.6297 3.30494 17.413 2.95449 17.0629C2.60404 16.7128 2.38711 16.3797 2.20604 15.9125C2.06868 15.5601 1.90618 15.0296 1.86184 14.0538C1.81333 12.9987 1.80364 12.6818 1.80364 10.009C1.80364 7.33612 1.81413 7.02007 1.86184 5.96418C1.90626 4.98835 2.06996 4.45884 2.20604 4.10549C2.38791 3.63819 2.60452 3.30477 2.95449 2.95422C3.30446 2.60367 3.63746 2.38668 4.10542 2.20556C4.45763 2.06816 4.98803 1.90561 5.96358 1.86125C7.01829 1.81273 7.33512 1.80304 10.006 1.80304C12.6769 1.80304 12.994 1.81353 14.0496 1.86125C15.0252 1.90569 15.5545 2.06944 15.9078 2.20556C16.3749 2.38668 16.7083 2.60415 17.0587 2.95422C17.4092 3.30429 17.6253 3.63819 17.8072 4.10549C17.9445 4.4578 18.107 4.98835 18.1514 5.96418C18.1999 7.02007 18.2096 7.33612 18.2096 10.009C18.2096 12.6818 18.1999 12.9979 18.1514 14.0538C18.1069 15.0296 17.9436 15.56 17.8072 15.9125C17.6253 16.3797 17.4087 16.7132 17.0587 17.0629C16.7087 17.4127 16.3749 17.6297 15.9078 17.8116C15.5556 17.949 15.0252 18.1115 14.0496 18.1559C12.9949 18.2044 12.6781 18.2141 10.006 18.2141C7.33392 18.2141 7.01797 18.2044 5.96358 18.1559Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="w-10 h-10 border-[1px] border-[var(--neutral-800)] rounded-full flex justify-center items-center"
                >
                  <svg
                    id="icon-linkedin-1"
                    viewBox="0 0 17 17"
                    className="w-4.5 h-4.5 text-[var(--neutral-25)]"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M3.79978 16.0138V5.2087H0.211505V16.0138H3.80016H3.79978ZM2.00639 3.73369C3.25744 3.73369 4.0363 2.90398 4.0363 1.86708C4.01288 0.806552 3.25744 0 2.03018 0C0.802089 0 0 0.806552 0 1.86698C0 2.90389 0.778578 3.73359 1.98288 3.73359H2.00611L2.00639 3.73369ZM5.78594 16.0138H9.37394V9.98041C9.37394 9.6579 9.39736 9.33455 9.49215 9.1042C9.75143 8.45872 10.3418 7.79054 11.3333 7.79054C12.6314 7.79054 13.151 8.78132 13.151 10.234V16.0138H16.7389V9.8185C16.7389 6.49976 14.9689 4.95538 12.6081 4.95538C10.6727 4.95538 9.82261 6.03812 9.35033 6.77558H9.37422V5.20907H5.78613C5.83296 6.22272 5.78585 16.0142 5.78585 16.0142L5.78594 16.0138Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  className="w-10 h-10 border-[1px] border-[var(--neutral-800)] rounded-full flex justify-center items-center"
                >
                  <svg
                    id="icon-tiktok-1"
                    viewBox="0 0 18 20"
                    className="w-4.5 h-4.5 text-[var(--neutral-25)]"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M14.9174 4.20454C14.7847 4.13596 14.6556 4.06078 14.5304 3.97928C14.1664 3.73865 13.8327 3.45511 13.5364 3.13477C12.7951 2.28657 12.5182 1.42609 12.4162 0.823624H12.4203C12.3352 0.323552 12.3704 0 12.3757 0H8.99929V13.0559C8.99929 13.2312 8.99929 13.4045 8.99192 13.5757C8.99192 13.597 8.98987 13.6166 8.98865 13.6396C8.98865 13.649 8.98865 13.6588 8.9866 13.6686C8.9866 13.6711 8.9866 13.6736 8.9866 13.676C8.95101 14.1445 8.80084 14.597 8.54932 14.9938C8.29779 15.3906 7.9526 15.7195 7.54413 15.9515C7.11841 16.1937 6.63691 16.3208 6.14712 16.3201C4.57401 16.3201 3.29905 15.0374 3.29905 13.4532C3.29905 11.869 4.57401 10.5863 6.14712 10.5863C6.44491 10.586 6.74086 10.6329 7.02399 10.7251L7.02808 7.28729C6.16857 7.17627 5.29537 7.24458 4.46358 7.48791C3.63178 7.73125 2.85944 8.14433 2.19528 8.70109C1.61333 9.20673 1.12407 9.81005 0.749539 10.4839C0.607013 10.7296 0.0692613 11.7171 0.00414141 13.3197C-0.0368145 14.2293 0.236362 15.1717 0.366601 15.5612V15.5694C0.448513 15.7988 0.765922 16.5814 1.2832 17.2412C1.70031 17.7705 2.19311 18.2354 2.74573 18.621V18.6128L2.75392 18.621C4.38847 19.7318 6.20078 19.6589 6.20078 19.6589C6.5145 19.6462 7.56543 19.6589 8.75888 19.0933C10.0826 18.4662 10.8362 17.532 10.8362 17.532C11.3176 16.9738 11.7004 16.3377 11.9682 15.6509C12.2737 14.8478 12.3757 13.8845 12.3757 13.4995V6.57302C12.4167 6.59759 12.9622 6.95842 12.9622 6.95842C12.9622 6.95842 13.7481 7.46217 14.9744 7.79023C15.8541 8.02368 17.0394 8.07283 17.0394 8.07283V4.72099C16.6241 4.76604 15.7808 4.63498 14.9174 4.20454Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
      <div
        id="modal-success"
        className="hidden transition-all ease-in-out duration-300"
      >
        <div className="pointer-events-none absolute inset-0 z-50 bg-black opacity-80"></div>
        <section className="h-screen inset-0 w-screen fixed z-50 pt-16 flex flex-col px-4 md:px-0 items-center justify-center">
          <div className="flex flex-col w-full rounded-2xl bg-neutral-950 border border-[var(--neutral-800)] md:w-[518px]">
            <div className="h-40 md:h-[225px] w-full flex justify-center items-center">
              <img
                className="h-35 md:h-57 w-35 md:w-57 object-contain shrink-0"
                src="./images/message-success.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col p-6 pb-10 md:p-8 md:pb-10 justify-center text-center gap-4 md:gap-8 bg-[var(--neutral-0)] rounded-b-2xl items-center">
              <div className="flex flex-col gap-0.5 md:gap-2">
                <h2 className="font-bold text-lg leading-8 md:text-xl md:leading-8.5">
                  Message Received!
                </h2>
                <p className="font-medium text-sm md:text-base md:leading-7.5 leading-7 text-neutral-400">
                  Thanks for reaching out — we’ll get back to you as soon as
                  possible.
                </p>
              </div>
              <button
                id="back-to-home-button"
                className="w-full md:w-[361px] h-11 leading-7 p-2 gap-1 rounded-full font-bold bg-[var(--primary-200)] text-white shadow-[inset_4px_4px_4px_0_rgba(255,255,255,0.25)] transition-all duration-300 hover:brightness-110 active:scale-95 cursor-pointer"
              >
                Back to Home
              </button>
            </div>
          </div>
        </section>
      </div>
      <div id="modal-error" className="hidden">
        <div className="pointer-events-none absolute inset-0 z-50 bg-black opacity-80"></div>
        <section className="h-screen inset-0 w-screen fixed z-50 pt-16 flex flex-col px-4 md:px-0 items-center justify-center">
          <div className="flex flex-col w-full rounded-2 bg-neutral-950 border border-[var(--neutral-800)] md:w-[518px]">
            <div className="h-40 md:h-[225px] w-full flex justify-center items-center">
              <img
                className="h-35 md:h-57 w-35 md:w-57 object-contain shrink-0"
                src="./images/message-error.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col p-6 pb-10 md:p-8 md:pb-10 justify-center text-center gap-4 md:gap-8 bg-[var(--neutral-0)] rounded-b-2xl items-center">
              <div className="flex flex-col gap-0.5 md:gap-2">
                <h2 className="font-bold text-lg leading-8 md:text-xl md:leading-8.5">
                  Oops! Something went wrong.
                </h2>
                <p className="font-medium text-sm md:text-base md:leading-7.5 leading-7 text-neutral-400">
                  We couldn’t send your message. Please try again or check your
                  connection.
                </p>
              </div>
              <button
                id="button-try-again"
                className="w-full md:w-[361px] h-11 leading-7 p-2 gap-1 rounded-full font-bold bg-[var(--primary-200)] text-white shadow-[inset_4px_4px_4px_0_rgba(255,255,255,0.25)] transition-all duration-300 hover:brightness-110 active:scale-95 cursor-pointer"
              >
                Try Again
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
