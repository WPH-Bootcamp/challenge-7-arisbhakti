import type { NavItem } from "../../constants/siteData";

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
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-semibold text-sm leading-7 text-neutral-25 py-2"
            onClick={onClose}
          >
            {item.label}
          </a>
        ))}

        <button
          onClick={onClose}
          className="contactus-button w-full h-11 leading-7 p-2 gap-1 rounded-full font-bold bg-[var(--primary-200)] text-white shadow-[inset_4px_4px_4px_0_rgba(255,255,255,0.25)] transition-all duration-300 hover:brightness-110 active:scale-95 cursor-pointer"
        >
          Let's Talk
        </button>
      </div>
    </nav>
  );
}
