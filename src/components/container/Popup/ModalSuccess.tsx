import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import ButtonPrimary from "../../ui/Button/Button";

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ModalSuccess({ open, onClose }: ModalProps) {
  const [mounted, setMounted] = useState(open);

  useEffect(() => {
    if (open) setMounted(true);
  }, [open]);

  const handleAfterClose = () => {
    setMounted(false);
  };

  if (!mounted) return null;

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 bg-black/60 transition-opacity duration-200 ease-out
          ${open ? "opacity-100" : "opacity-0"}`}
        onTransitionEnd={() => {
          if (!open) handleAfterClose();
        }}
      />

      {/* Container */}
      <div
        className={`fixed inset-0 transition-all ease-in-out duration-300 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <section className="h-screen inset-0 w-screen fixed z-50 pt-16 flex flex-col px-4 md:px-0 items-center justify-center">
          <div className="flex flex-col w-full rounded-2xl bg-neutral-950 border border-[var(--neutral-800)] md:w-[518px]">
            <div className="h-40 md:h-[225px] w-full flex justify-center items-center">
              <img
                className="h-35 md:h-57 w-35 md:w-57 object-contain shrink-0"
                src="./images/message-success.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col p-6 pb-10 md:p-8 md:pb-10 justify-center text-center gap-4 md:gap-8 bg-[var(--neutral-0)] rounded-b-2xl items-center">
              <div className="flex flex-col gap-0.5 md:gap-2">
                <h2 className="font-bold text-lg leading-8 md:text-xl md:leading-8.5">
                  Message Received!
                </h2>
                <p className="font-medium text-sm md:text-base md:leading-7.5 leading-7 text-neutral-400">
                  Thanks for reaching out — we’ll get back to you as soon as
                  possible.
                </p>
              </div>

              <ButtonPrimary
                id="back-to-home-button"
                onClick={onClose}
                className="w-full md:w-[361px] font-bold leading-7 bg-[var(--primary-200)]"
              >
                Back to Home
              </ButtonPrimary>
            </div>
          </div>
        </section>
      </div>
    </Dialog>
  );
}
