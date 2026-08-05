import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#about", label: "O mnie" },
  { href: "#projects", label: "Projekty" },
  { href: "#contact", label: "Kontakt" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-background/85 px-12 py-5 backdrop-blur-[8px]">
      <a
        href="#hero"
        className="font-mono text-[15px] font-bold tracking-tight"
      >
        ts<span className="text-accent">_</span>
      </a>
      <nav className="flex items-center gap-7">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-muted hover:text-foreground hover:no-underline"
          >
            {link.label}
          </a>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
