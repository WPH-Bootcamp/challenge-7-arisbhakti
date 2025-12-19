import { SERVICE_OPTIONS } from "../../constants/siteData";
import ButtonPrimary from "../../ui/Button/Button";
import Checkbox from "../../ui/Input/Checkbox";
import TextArea from "../../ui/Input/TextArea";
import TextInput from "../../ui/Input/TextInput";

export default function ContactUsSection() {
  return (
    <article
      id="contactus"
      className="flex flex-col px-4 pt-10 pb-0 md:px-35 md:py-20 justify-center items-center"
    >
      <div className="flex flex-col gap-6 md:gap-12 md:w-180">
        <header className="flex flex-col gap-4">
          <h2 className="font-bold text-[28px] leading-9.5 tracking-[-0.02em] md:text-[40px] md:leading-14 text-neutral-25 text-center">
            Ready to Start? Let’s Talk.
          </h2>
          <p className="font-medium text-sm leading-7 text-neutral-400 text-center md:text-lg md:leading-8">
            Tell us what you need, and we’ll get back to you soon.
          </p>
        </header>
        <form action="" className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <TextInput
                id="name"
                name="name"
                type="text"
                label="Name"
                placeholder="Enter your name"
                autoComplete="name"
              />

              <TextInput
                id="email"
                name="email"
                type="email"
                label="Email Address"
                placeholder="Enter your email"
                autoComplete="email"
              />

              <TextArea
                id="message"
                name="message"
                label="Message"
                placeholder="Enter your message"
              />
            </div>

            <div className="flex flex-col gap-3.5">
              <label className="font-bold text-sm leading-7 text-neutral-25">
                Services
              </label>
              <div className="flex flex-col md:flex-row md:gap-[37px] gap-4">
                <div className="flex flex-col md:flex-row md:gap-[37px] gap-4">
                  {/* Column kiri */}
                  <div className="flex flex-col gap-3.5 md:gap-4">
                    {SERVICE_OPTIONS.slice(0, 3).map((service) => (
                      <Checkbox
                        key={service.id}
                        id={service.id}
                        name={service.name}
                        value={service.value}
                        label={service.label}
                      />
                    ))}
                  </div>

                  {/* Column kanan */}
                  <div className="flex flex-col gap-3.5 md:gap-4">
                    {SERVICE_OPTIONS.slice(3).map((service) => (
                      <Checkbox
                        key={service.id}
                        id={service.id}
                        name={service.name}
                        value={service.value}
                        label={service.label}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ButtonPrimary
            id="button-send"
            type="submit"
            className="md:flex w-full md:h-12 font-bold text-sm md:text-base md:leading-7.5 tracking-[-0.02em] leading-7"
          >
            Send
          </ButtonPrimary>
          <div
            id="live"
            className="sr-only"
            aria-live="polite"
            aria-atomic="true"
          ></div>
        </form>
      </div>
    </article>
  );
}
