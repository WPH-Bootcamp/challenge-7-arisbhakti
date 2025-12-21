import LogoMarquee from "./LogoMarquee";
import { TRUSTED_LOGOS } from "../../constants/siteData";

export default function TrustedLogosSection() {
  return (
    <section id="about" className="flex flex-col mt-[43px] px-4 md:px-35">
      {/* Header */}
      <p className="font-bold text-center text-base md:text-2xl leading-7.5 md:leading-9 text-neutral-25">
        Trusted by Global Innovators & Leading Brands
      </p>

      {/* Marquee all the images */}
      <LogoMarquee logos={TRUSTED_LOGOS} />
    </section>
  );
}
