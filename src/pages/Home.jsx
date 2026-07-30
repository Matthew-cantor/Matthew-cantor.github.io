import { Link } from "react-router-dom";
import { site } from "../content/site.js";
import { projects } from "../content/projects.js";
import { Section, Label, ArrowButton } from "../components/ui.jsx";
import Reveal from "../components/Reveal.jsx";
import Socials from "../components/Socials.jsx";

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(47,95,255,0.14), transparent 65%)",
            animation: "glow-drift 9s ease-in-out infinite",
          }}
        />
        <div className="grid-backdrop pointer-events-none absolute inset-0" />

        <Section className="relative flex min-h-[88vh] flex-col justify-center pb-20 pt-16">
          <p className="label rise mb-7" style={{ animationDelay: "0ms" }}>
            {site.role} - {site.school}
          </p>

          <h1 className="font-display text-[clamp(2.8rem,10vw,7.5rem)] font-extrabold leading-[0.92] tracking-[-0.03em]">
            <span className="rise block" style={{ animationDelay: "80ms" }}>
              Building products
            </span>
            <span className="rise block" style={{ animationDelay: "180ms" }}>
              with <span className="text-signal">intent.</span>
            </span>
          </h1>

          <p
            className="rise mt-8 max-w-xl text-lg leading-relaxed text-mute"
            style={{ animationDelay: "300ms" }}
          >
            {site.intro}
          </p>

          <div
            className="rise mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "420ms" }}
          >
            <ArrowButton to="/projects">See my work</ArrowButton>
            <ArrowButton to="/about" variant="ghost">
              About me
            </ArrowButton>
          </div>

          {/* ── CONNECT ────────────────────────────────────────── */}
          <div className="rise mt-12" style={{ animationDelay: "520ms" }}>
            <Label>Connect with me</Label>
            <Socials className="mt-4" />
          </div>
        </Section>

        {/* marquee strip */}
        <div className="relative overflow-hidden border-y border-line bg-ink-2/60 py-3">
          <Marquee />
        </div>
      </section>

      {/* ── WORK ─────────────────────────────────────────────── */}
      <Section className="pt-28">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <Label>Projects</Label>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              What I've worked on.
            </h2>
          </div>
          <ArrowButton to="/projects" variant="ghost" className="hidden sm:inline-flex">
            All projects
          </ArrowButton>
        </div>

        <ul className="border-t border-line">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 70}>
              <Link
                to={`/projects/${p.slug}`}
                className="group grid gap-5 border-b border-line py-8 md:grid-cols-[1fr_1.4fr] md:gap-10 md:py-10"
              >
                {/* left: title + meta */}
                <div>
                  <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight transition-colors duration-300 group-hover:text-signal md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-signal-dim">{p.role}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-mute-2">
                    {p.timeframe}
                  </p>
                </div>

                {/* right: what it was, and what came of it */}
                <div className="md:pt-1">
                  <p className="max-w-xl leading-relaxed text-mute">{p.summary}</p>

                  <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
                    {p.outcome.map((o) => (
                      <div key={o.label}>
                        <dt className="font-display text-xl font-extrabold text-signal md:text-2xl">
                          {o.stat}
                        </dt>
                        <dd className="label mt-1">{o.label}</dd>
                      </div>
                    ))}
                  </dl>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-mute transition-colors group-hover:text-signal">
                    Read the case study
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>

        <div className="mt-10 sm:hidden">
          <ArrowButton to="/projects" variant="ghost">
            All projects
          </ArrowButton>
        </div>
      </Section>

      {/* ── ABOUT STRIP ──────────────────────────────────────── */}
      <Section className="pt-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-ink-2 p-8 md:p-14">
            <span
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(47,95,255,0.12), transparent 70%)" }}
            />
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
              <div>
                <Label>About</Label>
                <p className="mt-5 font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                  I sit where{" "}
                  <span className="text-signal">user needs</span>, business
                  goals, and{" "}
                  <span className="text-signal">what's buildable</span> overlap,
                  and I like getting close to the problem before the solution.
                </p>
                <div className="mt-8">
                  <ArrowButton to="/about" variant="ghost">
                    More about me
                  </ArrowButton>
                </div>
              </div>
              <div className="flex flex-wrap content-start gap-2.5">
                {site.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line px-3.5 py-1.5 text-sm text-mute"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <Section className="pt-32">
        <Reveal>
          <div className="text-center">
            <Label>Product · Toronto · Schulich</Label>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Let's make something worth shipping.
            </h2>
            <div className="mt-10 flex justify-center">
              <ArrowButton to="/projects">Read the projects</ArrowButton>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

function Marquee() {
  const items = [
    "Product Discovery",
    "User Research",
    "0 → 1",
    "Data & Metrics",
    "Go-to-Market",
    "Prioritization",
    "Prototyping",
  ];
  const row = [...items, ...items];
  return (
    <div className="marquee-track flex w-max items-center gap-3 whitespace-nowrap">
      {row.map((t, i) => (
        <span
          key={i}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-mute-2"
        >
          {t}
          <span className="text-signal">/</span>
        </span>
      ))}
    </div>
  );
}
