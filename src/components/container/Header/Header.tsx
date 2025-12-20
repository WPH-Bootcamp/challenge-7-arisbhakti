import { use, useEffect, useState } from "react";
import { NAV_ITEMS } from "../../constants/siteData";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import MobileMenuToggle from "../../ui/Button/MobileMenuToggle";
import ButtonPrimary from "../../ui/Button/Button";
import BrandLogo from "../../ui/Button/BrandLogo";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Optional tapi enak: kalau pindah ke desktop, tutup menu mobile
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

  // Kamu sebelumnya gak menampilkan "Home" di nav desktop, tapi ada di mobile menu.
  // Di App.tsx: desktop nav mulai dari About (tanpa Home). :contentReference[oaicite:1]{index=1}
  const desktopItems = NAV_ITEMS.filter((i) => i.href !== "#home");
  const mobileItems = NAV_ITEMS; // mobile boleh include Home

  return (
    <>
      <header className="w-full max-w-[1440px] fixed h-16 md:h-21 backdrop-blur-2xl flex justify-between items-center py-6 px-4 md:px-35 z-50">
        <BrandLogo></BrandLogo>

        <DesktopNav items={desktopItems} />

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

        <MobileMenuToggle
          open={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen((v) => !v)}
        />
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={mobileItems}
      />
    </>
  );
}
