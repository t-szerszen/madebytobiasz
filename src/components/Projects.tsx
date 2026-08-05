import CornerBrackets from "@/components/CornerBrackets";
import SectionHeading from "@/components/SectionHeading";

type Project = {
  path: string;
  name: string;
  description: string;
  tags: string[];
  link?: string;
};

const projects: Project[] = [
  {
    path: "/projects/zdajnik",
    name: "Zdajnik",
    description:
      "Platforma edukacyjna dla uczniów przygotowujących się do egzaminów zawodowych.",
    tags: ["PHP", "JavaScript", "SCSS", "MVC", "Composer"],
    link: "https://zdajnik.pl",
  },
  {
    path: "/projects/spendly",
    name: "Spendly",
    description:
      "Aplikacja do śledzenia i podziału wydatków oraz przychodów.",
    tags: ["PHP", "JavaScript", "MVC", "Composer"],
    link: "https://github.com/t-szerszen/spendly",
  },
  {
    path: "/projects/clean-group",
    name: "Clean Group",
    description: "Strona wizytówka dla firmy sprzątającej.",
    tags: ["HTML", "CSS", "PHP", "JavaScript"],
    link: "https://sprzatanieleszno.pl",
  },
  {
    path: "/projects/assetmate",
    name: "AssetMate",
    description:
      "Aplikacja desktopowa do obliczania celu oszczędnościowego, rat kredytów i oszczędności z nadpłacania kredytu.",
    tags: ["C++", "Qt"],
  },
];

const projectsLoop = [...projects, ...projects];

function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.link ? "a" : "div";

  return (
    <Wrapper
      {...(project.link
        ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="relative block w-[340px] flex-shrink-0 border border-border bg-surface text-foreground no-underline hover:no-underline"
    >
      <CornerBrackets />
      <div
        className="flex h-[150px] items-center justify-center border-b border-border bg-background"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--color-border) 0px, var(--color-border) 1px, transparent 1px, transparent 10px)",
        }}
      >
        <span className="font-mono text-xs text-muted">podgląd projektu</span>
      </div>
      <div className="p-6">
        <div className="mb-3.5 font-mono text-[13px] text-muted">
          {project.path}
        </div>
        <h3 className="mb-2.5 text-[22px] font-bold">{project.name}</h3>
        <p className="mb-5 min-h-[66px] text-[15px] leading-[1.65] text-muted">
          {project.description}
        </p>
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 border border-border px-2.5 py-1 font-mono text-xs text-muted"
            >
              <span className="h-[5px] w-[5px] rounded-full bg-accent" />
              {tag}
            </span>
          ))}
        </div>
        {project.link && (
          <span className="font-mono text-[13px] font-semibold text-accent">
            Zobacz projekt →
          </span>
        )}
      </div>
    </Wrapper>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border px-12 py-[120px]"
    >
      <SectionHeading eyebrow="02 — PROJEKTY" title="Co dotąd zbudowałem" />
      <div className="-mx-12 overflow-hidden px-12">
        <div className="flex w-max gap-7 [animation:marquee_48s_linear_infinite] hover:[animation-play-state:paused]">
          {projectsLoop.map((project, i) => (
            <ProjectCard key={`${project.name}-${i}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
