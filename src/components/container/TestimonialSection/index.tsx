import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import TESTIMONIALS from "../../constants/siteData";

export default function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    containScroll: "trimSnaps",
    align: (viewSize, snapSize) => (viewSize - snapSize) / 2,
    slidesToScroll: 1,
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

  const renderSlides =
    TESTIMONIALS.length < 5 ? [...TESTIMONIALS] : TESTIMONIALS;

  return (
    <article
      id="testimonials"
      className="overflow-hidden relative md:w-full md:overflow-x-hidden flex flex-col py-10 gap-12 md:py-20 md:gap-20 text-center px-4 justify-center items-center"
    >
      <header className="flex flex-col gap-[11px]">
        <h2 className="font-bold text-[28px] leading-9.5 tracking-[-0.02em] text-neutral-25 md:text-[40px] md:leading-14 z-30">
          What Partners Say About Working With Us
        </h2>
        <p className="text-sm leading-7 font-medium text-neutral-400 md:text-lg md:leading-8 z-30">
          Trusted voices. Real experiences. Proven results.
        </p>
      </header>
      <div className="flex md:hidden  gap-2 z-30">
        {renderSlides.map((t, i) => (
          <button
            key={`${t.id}-${i}`}
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
      {/* <div className="md:w-fit md:relative w-full " ref={emblaRef}> */}
      <div className="md:w-full md:relative w-full mx-auto" ref={emblaRef}>
        <div
          className="flex relative -ml-4 md:ml-0 md:gap-5"
          id="what-partners-say"
        >
          {renderSlides.map((t, idx) => {
            const active = idx % TESTIMONIALS.length === selectedIndex;

            return (
              <div
                key={`${t.id}-${idx}`}
                className="shrink-0 grow-0 basis-full pl-4 md:pl-0 md:basis-auto"
              >
                <figure
                  className={`cursor-pointer partner-content transition-all duration-300 relative flex flex-col bg-neutral-950 rounded-2xl pt-4 pl-4 pr-4 pb-12 gap-4 md:gap-6 md:pt-6 md:pl-6 md:pr-6 md:pb-12 border-[1px] border-[var(--neutral-900)] md:w-[594px] mx-auto
                  ${active ? "opacity-100" : "opacity-40 md:opacity-40"}
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
            );
          })}
        </div>
      </div>

      {/* DOTS (ganti image pagination jadi real dots) */}
      <div className="gap-2 z-30 hidden md:flex">
        {renderSlides.map((t, i) => (
          <button
            key={`${t.id}-${i}`}
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
