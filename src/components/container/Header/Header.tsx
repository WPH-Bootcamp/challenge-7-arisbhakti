import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../../constants/siteData";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import MobileMenuToggle from "../../ui/Button/MobileMenuToggle";
import ButtonPrimary from "../../ui/Button/ButtonPrimary";
import BrandLogo from "../../ui/Button/BrandLogo";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    console.log("Mobile menu is now", isMobileMenuOpen ? "open" : "closed");
  }, [isMobileMenuOpen]);

  const desktopItems = NAV_ITEMS.filter((i) => i.href !== "#home");
  const mobileItems = NAV_ITEMS;

  return (
    <>
      <header className="w-full max-w-[1440px] fixed h-16 md:h-21 backdrop-blur-2xl flex justify-between items-center py-6 px-4 md:px-35 z-50">
        {/* YOUR LOGO */}
        <BrandLogo onClose={() => setIsMobileMenuOpen(false)}></BrandLogo>

        {/* Navigation (About , Services , Projects, Testimonials, FAQ ) */}
        <DesktopNav items={desktopItems} />

        {/* Button "Let's Talk" */}
        <ButtonPrimary
          className="hidden md:flex font-medium"
          onClick={() => {
            document
              .getElementById("contactus")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Let's Talk
        </ButtonPrimary>

        {/* Button Humberger (only displayed in mobile view) */}
        <MobileMenuToggle
          open={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen((v) => !v)}
        />
      </header>

      {/* Mobile Menu (only displayed in mobile view) */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={mobileItems}
      />
    </>
  );
}
