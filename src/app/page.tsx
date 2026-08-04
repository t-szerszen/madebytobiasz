export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section
        id="hero"
        className="flex min-h-[calc(100vh-73px)] flex-col items-center justify-center gap-4 px-16 text-center"
      >
        <h1 className="text-4xl font-semibold tracking-tight">
          Cześć, jestem Tobiasz
        </h1>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          Buduję rzeczy w sieci.
        </p>
      </section>

      <section id="about" className="mx-auto w-full max-w-3xl px-16 py-24">
        <h2 className="text-2xl font-semibold">O mnie</h2>
      </section>

      <section id="projects" className="mx-auto w-full max-w-3xl px-16 py-24">
        <h2 className="text-2xl font-semibold">Projekty</h2>
      </section>

      <section id="contact" className="mx-auto w-full max-w-3xl px-16 py-24">
        <h2 className="text-2xl font-semibold">Kontakt</h2>
      </section>
    </main>
  );
}
