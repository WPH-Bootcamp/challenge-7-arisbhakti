type FaqIconProps = {
  open: boolean;
};

export function FaqToggleIcon({ open }: FaqIconProps) {
  return (
    <>
      {/* Dark mode */}
      <img
        src={open ? "/images/minus-icon.svg" : "/images/plus-icon.svg"}
        className="hidden dark:block w-6 h-6"
        alt=""
      />

      {/* Light mode */}
      <img
        src={
          open ? "/images/minus-icon-white.svg" : "/images/plus-icon-white.svg"
        }
        className="block dark:hidden w-6 h-6"
        alt=""
      />
    </>
  );
}
