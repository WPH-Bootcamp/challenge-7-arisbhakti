import * as siteData from "../../constants/siteData";
import ProcessEven from "./ProcessEven";
import ProcessOdd from "./ProcessOdd";

export default function ProcessSection() {
  const processSteps: siteData.ProcessStep[] = siteData.PROCESS_STEPS;

  return (
    <section
      id="process"
      className="flex flex-col gap-6 md:gap-16 py-10 px-4 md:py-20 md:px-35"
    >
      {/* Header */}
      <header className="flex flex-col gap-[11px]">
        <h2 className="text-center font-bold tracking-[-0.02em] text-[28px] leading-14 md:text-[40px] md:leading-9.5">
          Our Process
        </h2>

        <p className="text-center text-sm md:text-lg leading-7 md:leading-8 text-[var(--neutral-400)] max-w-[920px] mx-auto">
          From strategy to execution, we deliver solutions that grow your
          business.
        </p>
      </header>

      {/* Loop the data */}
      <div className="flex flex-col gap-4">
        {processSteps.map((item, index) => (
          <div key={index}>
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
          </div>
        ))}
      </div>
    </section>
  );
}
