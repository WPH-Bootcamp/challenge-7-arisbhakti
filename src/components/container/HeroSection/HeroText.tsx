import ButtonPrimary from "../../ui/Button/Button";

export default function HeroText() {
  return (
    <div className="pt-[125px] md:pt-[230px] px-4 md:px-0 md:pl-35 flex flex-col gap-10 md:w-[653px] h-auto z-10">
      <div className="flex flex-col gap-2 md:w-[653px]">
        <h1 className="font-bold text-4xl md:text-[56px] leading-11 md:leading-17 tracking-[-0.72px] md:tracking-[-0.02em] text-[var(--neutral-25)]">
          Your Tech Partner for{" "}
          <span className="text-[#FF6C37]">Smarter Growth</span>
        </h1>

        <p className="bitcount-single font-semibold text-base md:text-xl leading-7.5 md:leading-8.5 text-[var(--neutral-25)]">
          We deliver tailored IT solutions to help you scale with speed and
          confidence.
        </p>
      </div>

      <ButtonPrimary
        className="w-full md:w-50 h-12 text-base font-bold"
        onClick={() => {
          document
            .getElementById("contactus")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Let's Talk
      </ButtonPrimary>
    </div>
  );
}
