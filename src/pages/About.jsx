import { site } from "../content/site.js";
import { Section, Label, ArrowButton } from "../components/ui.jsx";
import PageHeader from "../components/PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import Socials from "../components/Socials.jsx";

export default function About() {
  return (
    <>
      <PageHeader
        label="About"
        title={
          <>
            Hi, I'm Matthew.
          </>
        }
        lead={site.tagline}
      />

      <Section className="grid gap-14 pt-8 md:grid-cols-[1fr_1.5fr]">
        {/* Portrait + facts */}
        <Reveal>
          <div className="md:sticky md:top-24">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-ink-2">
              <img
                src="/portrait.jpg"
                alt={site.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
            <dl className="mt-6 space-y-3 text-sm">
              <Fact k="Role" v={site.role} />
              <Fact k="School" v={site.school} />
              <Fact k="Based in" v={site.location} />
            </dl>

            {/* ── CONNECT ────────────────────────────────────── */}
            <div className="mt-6">
              <Label>Connect with me</Label>
              <Socials className="mt-4" />
            </div>
          </div>
        </Reveal>

        {/* Narrative */}
        <div className="space-y-12">
          <Reveal>
            <div className="space-y-6 text-lg leading-relaxed text-mute">
              {site.aboutLong.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div>
              <Label>Experience</Label>
              <ul className="mt-6 space-y-8">
                {site.experience.map((job) => (
                  <li
                    key={job.org}
                    className="relative border-l border-line pl-6"
                  >
                    <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-signal" />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display text-lg font-semibold">
                        {job.role}
                      </h3>
                      <span className="label whitespace-nowrap">{job.period}</span>
                    </div>
                    <p className="mt-0.5 text-signal-dim">
                      {job.org}
                      <span className="text-mute-2"> · {job.location}</span>
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {job.points.map((pt, i) => (
                        <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-mute">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mute-2" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div>
              <Label>Education</Label>
              <ul className="mt-5 divide-y divide-line">
                {site.education.map((ed) => (
                  <li
                    key={ed.school}
                    className="py-4"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <div>
                        <p className="font-display text-base font-semibold">{ed.school}</p>
                        <p className="text-sm text-mute">{ed.credential}</p>
                      </div>
                      <span className="label whitespace-nowrap">{ed.period}</span>
                    </div>
                    {ed.notes && (
                      <ul className="mt-3 space-y-1.5">
                        {ed.notes.map((n, i) => (
                          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-mute">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mute-2" />
                            {n}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div>
              <Label>How I work</Label>
              <ul className="mt-5 space-y-4">
                {principles.map((p) => (
                  <li key={p.title} className="border-l-2 border-line pl-5">
                    <p className="font-display text-lg font-semibold">{p.title}</p>
                    <p className="mt-1 text-mute">{p.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <Label>Toolkit</Label>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {site.skills.map((s) => (
                  <span key={s} className="rounded-full border border-line px-3.5 py-1.5 text-sm text-mute">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <ArrowButton to="/projects">See my work</ArrowButton>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function Fact({ k, v, href }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
      <dt className="label">{k}</dt>
      <dd className="text-right text-bone">
        {href ? (
          <a href={href} className="link-underline hover:text-signal">{v}</a>
        ) : (
          v
        )}
      </dd>
    </div>
  );
}

// Grounded in real experience - tweak the wording to sound like you.
const principles = [
  {
    title: "Own the whole funnel.",
    body: "Running Importique meant owning sourcing, margin, logistics, and demand at once. I'm comfortable holding the full picture and finding the point of leverage.",
  },
  {
    title: "Decisions over opinions.",
    body: "Whether it's profit margin or user engagement, I'd rather read the data and make a clear call than argue from gut. Outcomes over output.",
  },
  {
    title: "Bring the team with you.",
    body: "Translating stakeholder constraints into requirements across two hockey leagues taught me that execution lives or dies on alignment - the hard part is rarely the build, it's getting everyone to agree on what's being built.",
  },
];
