import { SOLUTIONS } from "../../constants/siteData";
import SolutionCard from "./SolutionCard";

export default function Solutions() {
  return (
    <article
      id="services"
      className="flex flex-col gap-10 md:gap-16 py-10 px-4 md:py-20 md:px-35"
    >
      {/* Header */}
      <header className="flex flex-col gap-[11px] text-center">
        <h2 className="font-semibold text-[28px] leading-9.5 md:text-[40px] md:leading-14 tracking-[-0.02em]">
          Smart IT Solutions That Grow With You
        </h2>
        <p className="font-medium text-sm leading-7 text-[var(--neutral-400)]">
          Tailored tech to boost efficiency, security, and results.
        </p>
      </header>

      {/* Loop the data */}
      <div className="flex flex-col gap-10">
        {Array.from({ length: 3 }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="first-row flex flex-col md:flex-row gap-10 md:gap-5"
          >
            {SOLUTIONS.slice(rowIndex * 3, rowIndex * 3 + 3).map((item) => (
              <SolutionCard key={item.title} item={item} />
            ))}
          </div>
        ))}
      </div>
    </article>
  );
}
