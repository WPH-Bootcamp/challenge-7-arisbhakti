export default function HeroVisual() {
  return (
    <div
      id="phone-div"
      className="relative pt-[43px] md:pt-0 md:top-0 z-0 md:w-1/2 md:ml-auto"
    >
      <img
        className="block dark:hidden w-full h-auto object-contain translate-x-[3px]"
        src="/images/phone-header-light.svg"
        alt="Phone Header Light"
      />

      <img
        className="hidden dark:block w-full h-auto object-contain"
        src="/images/phone-header-new.svg"
        alt="Phone Header Dark"
      />
    </div>
  );
}
