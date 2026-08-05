export default function Footer() {
  return (
    <footer className="flex justify-between border-t border-border px-12 py-7 font-mono text-xs text-muted">
      <span>© {new Date().getFullYear()} Tobiasz Szerszeń</span>
      <span>build v1.0.0</span>
    </footer>
  );
}
