import { FaqToggleIcon } from "../../ui/Button/FaqToggleIcon";
import type { FaqItem } from "../../constants/siteData";

type FAQItemProps = {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: (id: string) => void;
};

export default function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div key={faq.id} className="flex flex-col gap-7 w-full">
      <div
        className="flex flex-col gap-4 menu-hover cursor-pointer"
        onClick={() => onToggle(faq.id)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onToggle(faq.id);
        }}
      >
        <div className="flex justify-between">
          <h3 className="font-bold text-lg md:text-2xl leading-8 md:leading-9 text-neutral-25">
            {faq.question}
          </h3>

          <FaqToggleIcon open={isOpen} />
        </div>

        {isOpen && (
          <p className="font-medium text-sm leading-7 text-neutral-400 md:text-xl md:leading-8.5">
            {faq.answer}
          </p>
        )}
      </div>

      <hr className="border-[var(--neutral-800)]" />
      {/* {FAQS.map((faq) => {
                  const isOpen = openIds.has(faq.id);
      
                  return (
                    <div key={faq.id} className="flex flex-col gap-7 w-full">
                      <div
                        className="flex flex-col gap-4 menu-hover cursor-pointer"
                        onClick={() => toggle(faq.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") toggle(faq.id);
                        }}
                      >
                        <div className="flex justify-between">
                          <h3 className="font-bold text-lg md:text-2xl leading-8 md:leading-9 text-neutral-25">
                            {faq.question}
                          </h3>
      
                          <FaqToggleIcon open={isOpen} />
                        </div>
      
                        {isOpen && (
                          <p className="font-medium text-sm leading-7 text-neutral-400 md:text-xl md:leading-8.5">
                            {faq.answer}
                          </p>
                        )}
                      </div>
      
                      <hr className="border-[var(--neutral-800)]" />
                    </div>
                  );
                })} */}
    </div>
  );
}
