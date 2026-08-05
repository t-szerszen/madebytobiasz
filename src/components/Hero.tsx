export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[86vh] max-w-[980px] flex-col justify-center px-12"
    >
      <div className="mb-5 font-mono text-sm tracking-wide text-accent">
        {"// full-stack developer, technikum programistyczne — 5 klasa"}
      </div>
      <h1 className="mb-6 text-[64px] font-extrabold leading-[1.05] tracking-tight">
        Cześć, jestem Tobiasz
        <span className="animate-[blink_1s_step-end_infinite] text-accent">
          _
        </span>
      </h1>
      <p className="mb-10 max-w-[620px] text-lg leading-relaxed text-muted">
        18-letni uczeń ZSE-T Leszno, buduję produkty w React i Next.js. To
        portfolio to dziennik tego, co dotąd zbudowałem — jeden projekt na
        raz.
      </p>
      <div className="flex gap-3.5">
        <a
          href="#projects"
          className="border border-foreground bg-foreground px-6 py-3.5 text-[15px] font-semibold text-background no-underline hover:no-underline"
        >
          Zobacz projekty
        </a>
        <a
          href="#contact"
          className="border border-border px-6 py-3.5 text-[15px] font-semibold text-foreground no-underline hover:no-underline"
        >
          Napisz do mnie
        </a>
      </div>
    </section>
  );
}
