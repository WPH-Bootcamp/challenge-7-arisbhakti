type MobileMenuToggleProps = {
  open: boolean;
  onToggle: () => void;
};

export default function MobileMenuToggle({
  open,
  onToggle,
}: MobileMenuToggleProps) {
  return (
    <button
      className="md:hidden z-50"
      onClick={onToggle}
      aria-label="Toggle mobile menu"
    >
      {open ? (
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
  );
}
