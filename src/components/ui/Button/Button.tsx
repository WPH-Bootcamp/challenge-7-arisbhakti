type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonPrimary({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`items-center justify-center w-[197px] h-11 p-2 gap-1 rounded-full bg-[#FF623E] shadow-[inset_4px_4px_4px_0_rgba(255,255,255,0.25)] text-white transition-all duration-300 hover:brightness-110 active:scale-95 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
