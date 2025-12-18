import * as siteData from "../../constants/siteData";
import ProcessEven from "./ProcessEven";
import ProcessOdd from "./ProcessOdd";

export default function ProcessSection() {
  const toggleProcess = (step: number) => {
    console.log(`Toggling process step: ${step}`);
  };

  const processSteps: siteData.ProcessStep[] = siteData.PROCESS_STEPS;

  return (
    <article
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
        {processSteps.map((item, index) => (
          <>
            {index % 2 === 0 ? (
              <ProcessEven
                item={item}
                step={index + 1}
                isLast={index === processSteps.length - 1}
              />
            ) : (
              <ProcessOdd
                item={item}
                step={index + 1}
                isLast={index === processSteps.length - 1}
              />
            )}
          </>
        ))}

        {/* <div className="flex flex-row-reverse md:flex-row gap-3 md:gap-6">
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
        </div> */}
      </div>
    </article>
  );
}
