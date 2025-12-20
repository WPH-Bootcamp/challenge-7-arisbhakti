import { Dialog } from "@headlessui/react";
import ButtonPrimary from "../../ui/Button/ButtonPrimary";

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ModalError({ open, onClose }: ModalProps) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      {/* Container */}
      <div
        className={`fixed inset-0 transition-all ease-in-out duration-1000 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <section className="h-screen inset-0 w-screen fixed z-50 pt-16 flex flex-col px-4 md:px-0 items-center justify-center">
          <div className="flex flex-col w-full rounded-2 bg-neutral-950 border border-[var(--neutral-800)] md:w-[518px]">
            <div className="h-40 md:h-[225px] w-full flex justify-center items-center">
              <img
                className="h-35 md:h-57 w-35 md:w-57 object-contain shrink-0"
                src="/images/message-error.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col p-6 pb-10 md:p-8 md:pb-10 justify-center text-center gap-4 md:gap-8 bg-[var(--neutral-0)] rounded-b-2xl items-center">
              <div className="flex flex-col gap-0.5 md:gap-2">
                <h2 className="font-bold text-lg leading-8 md:text-xl md:leading-8.5">
                  Oops! Something went wrong.
                </h2>
                <p className="font-medium text-sm md:text-base md:leading-7.5 leading-7 text-neutral-400">
                  We couldn’t send your message. Please try again or check your
                  connection.
                </p>
              </div>
              <ButtonPrimary
                id="button-try-again"
                onClick={onClose}
                className="w-full md:w-[361px] font-bold leading-7 bg-[var(--primary-200)]"
              >
                Try Again
              </ButtonPrimary>
            </div>
          </div>
        </section>
      </div>
    </Dialog>
  );
}
