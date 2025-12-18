import { use, useEffect, useState } from "react";
import { NAV_ITEMS } from "../../constants/siteData";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

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
        <a
          href="#home"
          className="flex flex-row gap-[8.53px] md:gap-[9.6px] cursor-pointer"
          id="home-button"
        >
          <img
            src="/images/main-logo.svg"
            className="md:w-[29.59px] md:h-[32.46px] w-[26.3px] h-[28.85px]"
            alt="Your Logo"
          />
          <p className="menu-hover font-bold text-[21.33px] leading-8 md:text-2xl md:leading-9 text-[var(--neutral-1000)]">
            Your Logo
          </p>
        </a>

        <DesktopNav items={desktopItems} />

        <button className="contactus-button hidden md:flex items-center justify-center w-[197px] h-11 p-2 gap-1 rounded-full bg-[#FF623E] shadow-[inset_4px_4px_4px_0_rgba(255,255,255,0.25)] text-white font-medium transition-all duration-300 hover:brightness-110 active:scale-95 cursor-pointer">
          Let's Talk
        </button>

        <button
          className="md:hidden z-50"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <div className="button-close md:hidden">
              <img
                src="./images/x-close-black.svg"
                className="w-6 h-6 hidden dark:block z-50"
                alt=""
              />
              <img
                src="./images/x-close-white.svg"
                className="w-6 h-6 block dark:hidden z-50"
                alt=""
              />
            </div>
          ) : (
            <div className="button-menu md:hidden">
              <img
                src="./images/menu-white.svg"
                className="w-6 h-6 hidden dark:block z-50"
                alt=""
              />
              <img
                src="./images/menu-black.svg"
                className="w-6 h-6 block dark:hidden z-50"
                alt=""
              />
            </div>
          )}
        </button>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={mobileItems}
      />
    </>
  );
}
