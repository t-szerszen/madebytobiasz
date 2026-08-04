import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />

      <About />

      <Projects />

      <section id="contact" className="mx-auto w-full max-w-3xl px-16 py-24">
        <h2 className="text-2xl font-semibold">Kontakt</h2>
      </section>
    </main>
  );
}
