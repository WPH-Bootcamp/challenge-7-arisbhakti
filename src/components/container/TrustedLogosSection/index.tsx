import LogoMarquee from "./LogoMarquee";
import { TRUSTED_LOGOS } from "../../constants/siteData";

export default function TrustedLogosSection() {
  return (
    <section id="about" className="flex flex-col mt-[43px] px-4 md:px-35">
      <p className="font-bold text-center text-base md:text-2xl leading-7.5 md:leading-9 text-neutral-25">
        Trusted by Global Innovators & Leading Brands
      </p>
      {/* <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="h-32 md:h-50 py-10 flex w-max animate-marquee gap-16 will-change-transform group-hover:[animation-play-state:paused]">
          <ul className="flex items-center gap-16">
            <li>
              <img
                className="company-logo mix-blend-luminosity"
                src="./images/company-logo/adobe.svg"
                alt="Adobe"
              />
            </li>
            <li>
              <img
                className="company-logo"
                src="./images/company-logo/airbnb.svg"
                alt="Airbnb"
              />
            </li>
            <li>
              <img
                className="company-logo"
                src="./images/company-logo/databricks.svg"
                alt="Databricks"
              />
            </li>
            <li>
              <img
                className="company-logo"
                src="./images/company-logo/dropbox.svg"
                alt="Dropbox"
              />
            </li>
            <li>
              <img
                className="company-logo"
                src="./images/company-logo/netflix.svg"
                alt="Netflix"
              />
            </li>
            <li>
              <img
                className="company-logo"
                src="./images/company-logo/paypal.svg"
                alt="PayPal"
              />
            </li>
            <li>
              <img
                className="company-logo"
                src="./images/company-logo/postman.svg"
                alt="Postman"
              />
            </li>
            <li>
              <img
                className="company-logo"
                src="./images/company-logo/upwork.svg"
                alt="Upwork"
              />
            </li>
            <li>
              <img
                className="company-logo"
                src="./images/company-logo/zoom.svg"
                alt="Zoom"
              />
            </li>
          </ul>

          <ul className="flex items-center gap-16" aria-hidden="true">
            <li>
              <img
                className="company-logo"
                src="./images/company-logo/adobe.svg"
                alt=""
              />
            </li>
            <li>
              <img
                className="company-logo"
                src="./images/company-logo/airbnb.svg"
                alt=""
              />
            </li>
            <li>
              <img
                className="company-logo"
                src="./images/company-logo/databricks.svg"
                alt=""
              />
            </li>
            <li>
              <img
                className="company-logo"
                src="./images/company-logo/dropbox.svg"
                alt=""
              />
            </li>
            <li>
              <img
                className="company-logo"
                src="./images/company-logo/netflix.svg"
                alt=""
              />
            </li>
            <li>
              <img
                className="company-logo"
                src="./images/company-logo/paypal.svg"
                alt=""
              />
            </li>
            <li>
              <img
                className="company-logo"
                src="./images/company-logo/postman.svg"
                alt=""
              />
            </li>
            <li>
              <img
                className="company-logo"
                src="./images/company-logo/upwork.svg"
                alt=""
              />
            </li>
            <li>
              <img
                className="company-logo"
                src="./images/company-logo/zoom.svg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div> */}
      <LogoMarquee logos={TRUSTED_LOGOS} />
    </section>
  );
}
