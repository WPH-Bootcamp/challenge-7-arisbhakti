export default function TestimonialSection() {
  return (
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
                “Working with this team was a game-changer for our project. They
                understood our vision and turned it into reality efficiently and
                effectively.”
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
                “The team delivered exactly what we needed — on time and with
                outstanding quality. Their attention to detail and communication
                were top-notch.”
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
                “The collaboration was seamless, and the results surpassed our
                expectations. Their expertise transformed our ideas into a
                successful product.”
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
  );
}
