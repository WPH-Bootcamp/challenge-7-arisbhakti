import { useState } from "react";
import { INDUSTRIES } from "../../constants/siteData";

type IndustryKey = (typeof INDUSTRIES)[number]["key"];

export default function IndustrySection() {
  const [activeIndustry, setActiveIndustry] = useState<IndustryKey>(
    INDUSTRIES[0].key
  );

  const activeData = INDUSTRIES.find((item) => item.key === activeIndustry);

  return (
    <section className="flex flex-col gap-6 md:gap-16 px-4 py-10 md:px-35 md:py-20">
      {/* HEADER */}
      <header className="flex flex-col gap-[11px] text-left">
        <h2 className="font-bold text-[32px] md:text-[40px] leading-10.5 md:leading-14 tracking-[-0.02em]">
          Built for Your Industry
        </h2>
        <p className="font-medium text-sm md:text-lg leading-7 md:leading-8 text-neutral-400">
          We’ve helped companies across industries launch smarter, faster, and
          more securely.
        </p>
      </header>

      {/* CONTENT */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-16">
        {/* TITLE CONTENT */}
        <nav className="flex flex-col flex-1">
          <ul className="flex flex-col gap-3 md:gap-6 flex-1">
            {INDUSTRIES.map((industry) => {
              const isActive = activeIndustry === industry.key;

              return (
                <li key={industry.key} className="list-none">
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIndustry(industry.key)}
                    onClick={() => setActiveIndustry(industry.key)}
                    className={`cursor-pointer built-industry-menu border-l-[3px] border-solid border-[var(--neutral-600)] pl-1.5 md:pl-2 font-bold text-base md:text-xl leading-7.5 md:leading-8.5 tracking-[-0.02em] md:tracking-1 text-neutral-600
                      ${isActive ? "active" : ""}
                    `}
                  >
                    {industry.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* DESCRIPTION CONTENT */}
        <div className="flex flex-col flex-4">
          {activeData && (
            <div className="flex flex-col gap-5">
              <p className="font-medium text-sm md:text-lg leading-7 md:leading-8">
                {activeData.description}
              </p>
              <img src={activeData.image} alt={activeData.label} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
