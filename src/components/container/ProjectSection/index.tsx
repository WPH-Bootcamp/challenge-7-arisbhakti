import { PROJECTS } from "../../constants/siteData";

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

      <div className="grid grid-cols-3 md:flex-row gap-5">
        {PROJECTS.map((project) => (
          <article className="flex flex-col flex-1 gap-2 md:gap-3">
            <img src={project.image} className="w-full" alt={project.title} />
            <div className="flex flex-col">
              <h3 className="font-medium text-primary-200 text-sm leading-7 md:text-base md:leading-7.5">
                {project.category}
              </h3>
              <p className="font-bold text-base leading-7.5 tracking-[-0.02em] md:text-xl md:leading-8.5 md:tracking-1">
                {project.title}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
