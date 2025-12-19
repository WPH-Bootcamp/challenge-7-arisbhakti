import { PROJECTS } from "../../constants/siteData";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="flex flex-col gap-6 px-4 py-10 md:gap-16 md:py-20 md:px-35"
    >
      <header className="flex flex-col gap-[11px] justify-center text-center">
        <h2 className="font-bold text-[28px] leading-9.5 tracking-[-0.02em] md:text-[40px] md:leading-14">
          From Vision to Launch! Projects We’re Proud Of
        </h2>
        <p className="font-medium text-neutral-400 text-sm leading-7 md:text-lg md:leading-8">
          Take a closer look at our recent work powering startups, enterprises,
          and everything in between.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 md:flex-row gap-5">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
