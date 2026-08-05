import CornerBrackets from "@/components/CornerBrackets";
import SectionHeading from "@/components/SectionHeading";

const stack = [
  "React",
  "Next.js",
  "JavaScript",
  "PHP",
  "HTML/CSS",
  "SCSS",
  "Python",
  "C++",
];

const ledger = [
  { year: "2021", label: "Start nauki w ZSE-T Leszno" },
  { year: "2023", label: "Pierwsze projekty webowe — Zdajnik i Spendly" },
  { year: "2024", label: "Clean Group — pierwszy projekt komercyjny" },
  { year: "2025", label: "AssetMate i budowa tego portfolio" },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1100px] border-t border-border px-12 py-[120px]"
    >
      <SectionHeading eyebrow="01 — O MNIE" title="Samouk w drodze" />
      <div className="grid grid-cols-1 gap-20 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="relative mb-6 h-[120px] w-[120px]">
            <CornerBrackets />
            <img
              src="https://placehold.co/120x120/1c1a17/f3f0ea?text=TS"
              alt="Zdjęcie profilowe"
              className="h-full w-full border border-border object-cover"
            />
          </div>
          <p className="mb-4 text-[17px] leading-[1.75] text-muted">
            Programowania uczę się od trzeciej klasy technikum — najpierw
            jako obowiązek szkolny, potem jako coś, czego robię po godzinach,
            bo chcę, nie muszę. Stack: React, Next.js, JavaScript, PHP,
            HTML/CSS, SCSS, Python, C++.
          </p>
          <p className="mb-6 text-[17px] leading-[1.75] text-muted">
            Nie szukam efektu na pierwszy rzut oka — wolę produkt, który
            działa i jest czytelny za rok. Ta strona jest tego dowodem.
          </p>
          <ul className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <li
                key={tech}
                className="border border-border px-2.5 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-7 border-l-2 border-border pl-7">
          {ledger.map((entry) => (
            <div key={entry.year} className="relative">
              <div className="absolute -left-[33px] top-1 h-2 w-2 rounded-full bg-accent" />
              <div className="mb-1 font-mono text-[13px] text-accent">
                {entry.year}
              </div>
              <div className="text-[15px] font-medium text-foreground">
                {entry.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
