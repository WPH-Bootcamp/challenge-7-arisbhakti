type BrandLogoProps = {
  href?: string;
};

export default function BrandLogo({ href = "#home" }: BrandLogoProps) {
  return (
    <a href={href} className="flex flex-row gap-[8.53px] cursor-pointer">
      <img
        src="/images/main-logo.svg"
        className="md:w-[29.59px] md:h-[32.46px] w-[26.3px] h-[28.85px]"
        alt="Your Logo"
      />
      <p className="menu-hover font-bold text-[21.33px] leading-8 md:text-2xl md:leading-9">
        Your Logo
      </p>
    </a>
  );
}
