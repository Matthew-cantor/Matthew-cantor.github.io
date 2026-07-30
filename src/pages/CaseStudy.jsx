import { useParams, Link, Navigate } from "react-router-dom";
import { getProject, projects } from "../content/projects.js";
import { Section, Label, ArrowButton, Tag } from "../components/ui.jsx";
import Reveal from "../components/Reveal.jsx";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) return <Navigate to="/projects" replace />;

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-line">
        <span
          className="pointer-events-none absolute right-[-5%] top-[-20%] h-[420px] w-[620px] blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(47,95,255,0.12), transparent 65%)" }}
        />
        <Section className="relative pb-16 pt-16 md:pt-24">
          <Link to="/projects" className="label inline-flex items-center gap-2 hover:text-signal">
            ← All projects
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,8vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.03em] rise">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-mute rise" style={{ animationDelay: "120ms" }}>
            {project.summary}
          </p>

          <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3">
            <Meta k="Role" v={project.role} />
            <Meta k="Timeframe" v={project.timeframe} />
            <Meta k="Focus" v={project.tags[0]} />
          </dl>

          {project.links?.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-3">
              {project.links.map((l, i) => (
                <ArrowButton key={l.href} href={l.href} variant={i === 0 ? "solid" : "ghost"}>
                  {l.label}
                </ArrowButton>
              ))}
            </div>
          )}
        </Section>

        {/* cover band */}
        {project.cover && (
          <Section className="relative pb-2">
            <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl border border-line bg-ink-3">
              {project.coverFit === "contain" ? (
                // Logo: scaled down, centered both axes, generous padding, no crop.
                <img
                  src={project.cover}
                  alt={project.title}
className="absolute inset-0 m-auto h-auto w-auto max-h-full max-w-full"
                />
              ) : (
                <img
                  src={project.cover}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
            </div>
          </Section>
        )}
      </section>

      {/* ── DEMO VIDEO ───────────────────────────────────────── */}
      {project.video && (
        <Section className="pt-20">
          <Label className="mb-5 block">Demo</Label>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-line bg-ink-3">
            <video
              src={`${project.video}#t=0.1`}
              controls
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </Section>
      )}

      {/* ── BODY ─────────────────────────────────────────────── */}
      <Section className="grid gap-16 pt-20 md:grid-cols-[1fr_2fr]">
        {/* sticky section index */}
        <aside className="hidden md:block">
          <div className="sticky top-24 space-y-3">
            <Label>Contents</Label>
            {["Context", "Problem", "Approach", "Outcome", "Reflection"].map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                className="block text-sm text-mute transition-colors hover:text-signal"
              >
                {s}
              </a>
            ))}
          </div>
        </aside>

        <div className="max-w-2xl space-y-16">
          <Block id="context" label="01 - Context">
            <p className="prose-p">{project.context}</p>
          </Block>

          <Block id="problem" label="02 - The Problem">
            <p className="prose-p font-display text-2xl font-medium leading-snug text-bone">
              {project.problem}
            </p>
          </Block>

          <Block id="approach" label="03 - Approach">
            <ol className="space-y-8">
              {project.approach.map((step, i) => (
                <li key={i} className="flex gap-5">
                  <span className="font-mono text-sm text-signal">{String(i + 1).padStart(2, "0")}</span>
                  <p className="prose-p flex-1">{step}</p>
                </li>
              ))}
            </ol>
          </Block>

          <Block id="outcome" label="04 - Outcome">
            <div className="grid gap-4 sm:grid-cols-3">
              {project.outcome.map((o, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="rounded-2xl border border-line bg-ink-2 p-6">
                    <p className="font-display text-4xl font-extrabold text-signal">{o.stat}</p>
                    <p className="mt-2 text-sm text-mute">{o.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Block>

          <Block id="reflection" label="05 - Reflection">
            <p className="prose-p">{project.reflection}</p>
          </Block>
        </div>
      </Section>

      {/* ── NEXT PROJECT ─────────────────────────────────────── */}
      <Section className="pt-28">
        <Link
          to={`/projects/${next.slug}`}
          className="group flex flex-col gap-4 rounded-3xl border border-line bg-ink-2 p-8 transition-colors hover:border-signal md:flex-row md:items-center md:justify-between md:p-12"
        >
          <div>
            <Label>Next project</Label>
            <p className="mt-3 font-display text-3xl font-semibold tracking-tight transition-colors group-hover:text-signal md:text-5xl">
              {next.title}
            </p>
          </div>
          <span className="text-3xl transition-transform duration-300 group-hover:translate-x-2 md:text-5xl">→</span>
        </Link>
      </Section>
    </article>
  );
}

function Meta({ k, v }) {
  return (
    <div>
      <dt className="label">{k}</dt>
      <dd className="mt-1.5 text-bone">{v}</dd>
    </div>
  );
}

function Block({ id, label, children }) {
  return (
    <Reveal as="section">
      <div id={id} className="scroll-mt-24">
        <Label className="mb-5 block">{label}</Label>
        {children}
      </div>
    </Reveal>
  );
}
