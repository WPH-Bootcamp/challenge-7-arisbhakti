import React from "react";

type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label: string;
};

export default function Checkbox({
  label,
  id,
  className,
  ...props
}: CheckboxProps) {
  if (!id) {
    throw new Error("Checkbox requires an id prop");
  }

  return (
    <div className="flex gap-3 items-center">
      <input
        id={id}
        type="checkbox"
        className={`custom-checkbox ${className ?? ""}`}
        {...props}
      />
      <label
        htmlFor={id}
        className="font-medium leading-7 text-sm md:leading-7.5 md:text-base cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
}
