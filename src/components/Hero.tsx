export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-73px)] flex-col items-center justify-center gap-4 px-16 text-center"
    >
      <p className="text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
        Full-stack Developer
      </p>
      <h1 className="text-4xl font-semibold tracking-tight">
        Tobiasz Szerszeń
      </h1>
      <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
        Uczę się i buduję rzeczy w sieci. Obecnie skupiam się na React i Next.js.
      </p>
      <a
        href="#projects"
        className="mt-2 text-sm font-medium underline underline-offset-4 hover:opacity-70"
      >
        Zobacz projekty ↓
      </a>
    </section>
  );
}
