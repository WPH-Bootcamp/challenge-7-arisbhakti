import type { SolutionItem } from "../../constants/siteData";

type SolutionCardProps = {
  item: SolutionItem;
};

export default function SolutionCard({ item }: SolutionCardProps) {
  return (
    <article className="solution-content">
      <img
        src={item.image}
        className="absolute top-[-21px] left-[20px] w-16 h-16 md:w-20 md:h-20 md:top-[-26px]"
        alt={item.title}
      />

      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-base md:text-xl leading-7.5 md:leading-8.5 tracking-[-0.02em]">
          {item.title}
        </h3>

        <p className="font-medium text-[var(--neutral-400)] text-sm md:text-base leading-7 md:leading-7.5">
          {item.description}
        </p>
      </div>
    </article>
  );
}
