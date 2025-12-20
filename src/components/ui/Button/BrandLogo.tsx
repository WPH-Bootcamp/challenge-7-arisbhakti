type BrandLogoProps = {
  href?: string;
  onClose?: () => void;
};

export default function BrandLogo({ href = "#home", onClose }: BrandLogoProps) {
  return (
    <button
      onClick={() => {
        onClose?.();
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="flex flex-row gap-[9.6px] cursor-pointer"
    >
      <img
        src="/images/main-logo.svg"
        className="md:w-[29.59px] md:h-[32.46px] w-[26.3px] h-[28.85px]"
        alt="Your Logo"
      />
      <p className="menu-hover font-bold text-[21.33px] leading-8 md:text-2xl md:leading-9">
        Your Logo
      </p>
    </button>
  );
}
