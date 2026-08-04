const contacts = [
  {
    label: "Email",
    value: "tobiasz@zdajnik.pl",
    href: "mailto:tobiasz@zdajnik.pl",
  },
  {
    label: "Telefon",
    value: "+48 784 803 409",
    href: "tel:+48784803409",
  },
  {
    label: "LinkedIn",
    value: "Tobiasz Szerszeń",
    href: "https://www.linkedin.com/in/tobiasz-szersze%C5%84-6b90a7360/?skipRedirect=true",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-3xl px-16 py-24">
      <h2 className="text-2xl font-semibold">Kontakt</h2>
      <ul className="mt-6 flex flex-col gap-3 text-lg">
        {contacts.map((contact) => (
          <li key={contact.label}>
            <span className="text-zinc-500 dark:text-zinc-500">
              {contact.label}:{" "}
            </span>
            <a
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="hover:underline"
            >
              {contact.value}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
