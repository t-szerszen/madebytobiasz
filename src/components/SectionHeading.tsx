"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-12">
      <div className="mb-3 font-mono text-xs tracking-widest text-accent">
        {eyebrow}
      </div>
      <h2 className="inline-block text-3xl font-bold tracking-tight">
        {title}
        <span
          className={`mt-1.5 block h-0.5 bg-accent transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            revealed ? "w-full" : "w-0"
          }`}
        />
      </h2>
    </div>
  );
}
