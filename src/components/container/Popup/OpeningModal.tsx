

import { Dialog } from "@headlessui/react";

type InfoModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function OpeningModal({ open, onClose }: InfoModalProps) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl bg-neutral-950 border border-[var(--neutral-800)] p-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-neutral-25">
              Dear WPH Bootcamp Mentors,
            </h2>

            <p className="text-sm leading-7 text-neutral-300">
              I would like to kindly inform you that the dark and light modes in
              this application automatically follow your browser’s preference.
            </p>

            <p className="text-sm leading-7 text-neutral-300">
              Please feel free to explore the application that I have built.
              Thank you very much for your time and guidance.
            </p>

            <p className="text-sm leading-7 text-neutral-300">
              Sincerely,
              <br />
              <span className="font-semibold text-neutral-25">
                Aris Setya Bhakti
              </span>
              <br />
              <span className="text-neutral-400">(Batch Rendang – WPH 22)</span>
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-2 h-11 rounded-full bg-[#FF623E] shadow-[inset_4px_4px_4px_0_rgba(255,255,255,0.25)] text-white font-bold transition-all duration-300 hover:brightness-110 active:scale-95"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
