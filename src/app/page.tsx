import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />

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
