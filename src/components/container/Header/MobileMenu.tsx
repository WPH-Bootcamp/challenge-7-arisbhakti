import type { NavItem } from "../../constants/siteData";
import ButtonPrimary from "../../ui/Button/ButtonPrimary";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
};

export default function MobileMenu({
  isOpen,
  onClose,
  items,
}: MobileMenuProps) {
  return (
    <nav
      aria-label="mobile"
      className={`mobile-menu h-screen w-screen md:hidden fixed inset-0 
    bg-[var(--neutral-0)] overflow-hidden z-40 pt-16
    transition-opacity duration-300
    ${
      isOpen
        ? "pointer-events-auto opacity-100"
        : "pointer-events-none opacity-0"
    }
  `}
    >
      <div className="flex flex-col gap-3 px-4">
        {items
          .filter((i) => i.href !== "#home")
          .map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-semibold text-sm leading-7 text-neutral-25 py-2"
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}

        <ButtonPrimary
          className="contactus-button w-full h-11 leading-7 font-bold bg-[var(--primary-200)]"
          onClick={() => {
            onClose();
            document
              .getElementById("contactus")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Let's Talk
        </ButtonPrimary>
      </div>
    </nav>
  );
}
