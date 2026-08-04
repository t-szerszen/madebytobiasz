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

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-3xl px-16 py-24">
      <h2 className="text-2xl font-semibold">O mnie</h2>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        Mam 18 lat i jestem uczniem 5 klasy technikum programistycznego w
        Zespole Szkół Elektroniczno-Telekomunikacyjnych w Lesznie.
        Programowanie łączę z nauką — obecnie rozwijam się w kierunku React i
        Next.js, wcześniej pracowałem z vanilla JS, PHP, Pythonem i C++.
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-black/[.08] px-3 py-1 text-sm text-zinc-700 dark:border-white/[.145] dark:text-zinc-300"
          >
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}
