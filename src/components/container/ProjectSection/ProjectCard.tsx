import { type ProjectItem } from "../../constants/siteData";
export default function ProjectCard({ title, image, category }: ProjectItem) {
  return (
    <article className="flex flex-col flex-1 gap-2 md:gap-3">
      <img src={image} className="w-full" alt={title} />
      <div className="flex flex-col">
        <h3 className="font-medium text-primary-200 text-sm leading-7 md:text-base md:leading-7.5">
          {category}
        </h3>
        <p className="font-bold text-base leading-7.5 tracking-[-0.02em] md:text-xl md:leading-8.5 md:tracking-1">
          {title}
        </p>
      </div>
    </article>
  );
}
