import { useState } from "react";
import * as siteData from "../../constants/siteData";
import ButtonArrowDown from "../../ui/Button/ButtonArrowDown";
import ButtonArrowUp from "../../ui/Button/ButtonArrowUp";

type ProcessEvenProps = {
  item: siteData.ProcessStep;
  step: number;
  isLast?: boolean;
};
export default function ProcessEven({ item, step, isLast }: ProcessEvenProps) {
  const [showContent, setShowContent] = useState(true);
  const toggleProcess = () => {
    setShowContent((prev) => !prev);
  };

  return (
    <div className="flex flex-row md:flex-row gap-3 md:gap-6" key={step}>
      <div className="hidden relative md:flex flex-row flex-1 p-4 md:p-6 gap-1 text-left rounded-2xl border-[var(--neutral-0)] border-[1px]"></div>

      <div className="flex flex-1 justify-center-center items-center flex-shrink-0 flex-grow-0">
        <div
          className={`relative flex justify-center items-center bg-[var(--primary-200)] w-10 h-10 md:w-12 md:h-12 mx-auto rounded-full flex-shrink-0 text-white font-bold tracking-1 md:tracking-[-0.02em] text-xs md:text-base leading-6 md:leading-7.5 ${
            isLast ? "" : "timeline-line"
          }`}
        >
          {step}
        </div>
      </div>
      <div
        className="our-process-card"
        id="our-process-card-2"
        onClick={toggleProcess}
      >
        <div className="relative flex flex-col flex-1">
          <h3 className="text-base md:text-xl font-bold leading-7.5 md:leading-8.5 tracking-[-0.02em]">
            {item.title}
          </h3>
          {showContent && (
            <p className="text-sm md:text-base font-medium leading-7 md:leading-7.5 text-[var(--neutral-400)]">
              {item.subtitle}
            </p>
          )}
        </div>
        <div className="flex items-start justify-center">
          {showContent ? <ButtonArrowUp /> : <ButtonArrowDown />}
        </div>
      </div>
    </div>
  );
}
