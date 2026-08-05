import SectionHeading from "@/components/SectionHeading";

const contacts = [
  {
    label: "email",
    value: "tobiasz@zdajnik.pl",
    href: "mailto:tobiasz@zdajnik.pl",
  },
  {
    label: "telefon",
    value: "+48 784 803 409",
    href: "tel:+48784803409",
  },
  {
    label: "github",
    value: "github.com/t-szerszen",
    href: "https://github.com/t-szerszen",
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/tobiasz-szerszeń",
    href: "https://www.linkedin.com/in/tobiasz-szersze%C5%84-6b90a7360/?skipRedirect=true",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-contact-bg px-12 pb-[100px] pt-[120px] text-contact-fg"
    >
      <SectionHeading eyebrow="03 — KONTAKT" title="Porozmawiajmy" />
      <div className="max-w-[560px] font-mono text-base leading-[2.4]">
        {contacts.map((contact) => (
          <div key={contact.label}>
            <span className="text-accent">$</span> {contact.label}{" "}
            <a
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="text-inherit underline underline-offset-[3px] hover:text-inherit"
            >
              {contact.value}
            </a>
          </div>
        ))}
      </div>
      <a
        href="mailto:tobiasz@zdajnik.pl"
        className="mt-10 inline-block bg-accent px-6 py-3.5 text-[15px] font-bold text-[#171512] no-underline hover:no-underline"
      >
        $ send_message
      </a>
    </section>
  );
}
