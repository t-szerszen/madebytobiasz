type Project = {
  name: string;
  description: string;
  stack: string[];
  link?: string;
};

const projects: Project[] = [
  {
    name: "Zdajnik",
    description:
      "Platforma edukacyjna dla uczniów przygotowujących się do egzaminów zawodowych.",
    stack: ["PHP", "JavaScript", "SCSS", "HTML", "MVC", "Composer"],
    link: "https://zdajnik.pl",
  },
  {
    name: "Spendly",
    description:
      "Aplikacja do śledzenia i podziału wydatków oraz przychodów.",
    stack: ["PHP", "JavaScript", "HTML", "MVC", "Composer"],
    link: "https://github.com/t-szerszen/spendly",
  },
  {
    name: "Clean Group",
    description: "Strona wizytówka dla firmy sprzątającej.",
    stack: ["HTML", "CSS", "PHP", "JavaScript"],
    link: "https://sprzatanieleszno.pl",
  },
  {
    name: "AssetMate",
    description:
      "Aplikacja desktopowa do obliczania celu oszczędnościowego, rat kredytów i oszczędności z nadpłacania kredytu.",
    stack: ["C++", "Qt"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-3xl px-16 py-24">
      <h2 className="text-2xl font-semibold">Projekty</h2>
      <div className="mt-8 flex flex-col gap-10">
        {projects.map((project) => (
          <article key={project.name}>
            <h3 className="text-lg font-semibold">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  {project.name}
                  <span aria-hidden className="text-sm text-zinc-500">
                    ↗
                  </span>
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-black/[.08] px-3 py-1 text-xs text-zinc-700 dark:border-white/[.145] dark:text-zinc-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
