import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import TESTIMONIALS from "../../constants/siteData";

export default function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const startIndex = Math.floor(TESTIMONIALS.length / 2);
    emblaApi.scrollTo(startIndex, true);
    setSelectedIndex(startIndex);

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <article
      id="testimonials"
      className="overflow-hidden relative md:w-full md:overflow-x-hidden flex flex-col py-10 gap-12 md:py-20 md:gap-20 text-center px-4 justify-center items-center"
    >
      {/* <div
        id="gradient-image-left"
        className="pointer-events-none hidden md:block absolute inset-0 z-10 bg-[linear-gradient(to_right,var(--neutral-0)_0%,rgba(0,0,0,0)_40%)]"
      />
      <div
        id="gradient-image-right"
        className="pointer-events-none hidden md:block absolute inset-0 z-10 bg-[linear-gradient(to_left,var(--neutral-0)_0%,rgba(0,0,0,0)_40%)]"
      /> */}

      <header className="flex flex-col gap-[11px]">
        <h2 className="font-bold text-[28px] leading-9.5 tracking-[-0.02em] text-neutral-25 md:text-[40px] md:leading-14 z-30">
          What Partners Say About Working With Us
        </h2>
        <p className="text-sm leading-7 font-medium text-neutral-400 md:text-lg md:leading-8 z-30">
          Trusted voices. Real experiences. Proven results.
        </p>
      </header>

      {/* EMBLA VIEWPORT */}
      <div className="md:w-fit md:relative w-full" ref={emblaRef}>
        {/* EMBLA CONTAINER */}
        <div className="flex relative gap-1 md:gap-5" id="what-partners-say">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              // className="shrink-0 grow-0 basis-full md:basis-auto"
              className="shrink-0 grow-0 basis-full px-2 md:px-0 md:basis-auto"
            >
              <figure
                className={`cursor-pointer partner-content transition-all duration-300 relative flex flex-col bg-neutral-950 rounded-2xl pt-4 pl-4 pr-4 pb-12 gap-4 md:gap-6 md:pt-6 md:pl-6 md:pr-6 md:pb-12 border-[1px] border-[var(--neutral-900)] md:w-[594px] mx-auto
                  ${
                    idx === selectedIndex
                      ? "opacity-100"
                      : "opacity-40 md:opacity-40"
                  }
                `}
              >
                <img
                  src={t.avatar}
                  className="w-[60px] h-15 absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[-25px] md:w-[75px] md:h-[75px] md:-translate-y-[-45px]"
                  alt=""
                />

                <figcaption className="flex flex-col gap-3 relative">
                  <img
                    src="/images/partners/quote.svg"
                    className="w-16 h-16 absolute top-[-50px] left-[3px] md:w-20 md:h-20 md:left-[27px] md:top-[-66px]"
                    alt=""
                  />

                  <div className="flex justify-center items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <img
                        key={i}
                        src="/images/partners/star-filled.svg"
                        className="w-6 h-6"
                        alt=""
                      />
                    ))}
                  </div>

                  <p className="font-semibold text-sm leading-7 md:text-lg md:leading-8 text-neutral-25">
                    {t.quote}
                  </p>
                </figcaption>

                <div className="flex flex-col">
                  <h2 className="font-semibold text-sm leading-7 md:text-lg md:leading-8 text-neutral-25">
                    {t.name}
                  </h2>
                  <p className="font-semibold text-sm leading-7 md:text-lg md:leading-8 text-primary-200">
                    {t.role}
                  </p>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS (ganti image pagination jadi real dots) */}
      <div className="flex gap-2 z-30">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.id}
            type="button"
            onClick={() => scrollTo(i)}
            className={`w-2 h-2 rounded-full ${
              i === selectedIndex
                ? "bg-[var(--primary-200)]"
                : "bg-[var(--neutral-700)]"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </article>
  );
}
