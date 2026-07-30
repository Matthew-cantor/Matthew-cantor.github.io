import { Section, Label } from "./ui.jsx";

// Shared top-of-page header for interior pages.
export default function PageHeader({ label, title, lead }) {
  return (
    <Section className="relative pb-10 pt-20 md:pt-28">
      <span
        className="pointer-events-none absolute left-0 top-8 h-48 w-72 blur-[110px]"
        style={{ background: "radial-gradient(circle, rgba(47,95,255,0.12), transparent 70%)" }}
      />
      <div className="relative">
        <Label>{label}</Label>
        <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.4rem,7vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] rise">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mute rise" style={{ animationDelay: "120ms" }}>
            {lead}
          </p>
        )}
      </div>
    </Section>
  );
}
