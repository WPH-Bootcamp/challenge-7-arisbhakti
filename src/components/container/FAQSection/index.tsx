import { useState } from "react";
import { FAQS } from "../../constants/siteData";
import FAQItem from "./FAQItem";
import ConsultationCard from "./ConsultationCard";
export default function FAQSection() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <article
      id="faq"
      className="flex flex-col py-10 px-4 gap-6 md:py-20 md:px-30 md:gap-12"
    >
      {/* HEADER */}
      <header className="flex flex-col md:flex-row gap-4 md:justify-between">
        <h2 className="font-bold text-[28px] leading-9.5 tracking-[-0.02em] md:text-[40px] md:leading-14 text-neutral-25 md:w-[331px]">
          Need Help? Start Here.
        </h2>
        <p className="font-medium text-sm leading-7 text-neutral-400 md:text-lg md:leading-8 md:w-[245px] flex flex-col md:items-end md:justify-end">
          Everything you need to know — all in one place.
        </p>
      </header>
      <hr className="border-[var(--neutral-800)]" />

      {/* CONTENT */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-[73px] justify-between">
        <div className="flex flex-col gap-7 w-full">
          {FAQS.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openIds.has(faq.id)}
              onToggle={toggle}
            />
          ))}
        </div>

        <ConsultationCard />
      </div>
    </article>
  );
}
