import { Link } from "react-router-dom";

// Editorial index: oversized project titles as a list. Hovering a row shifts
// the title to the signal colour and advances the arrow, no imagery.
export default function ProjectIndex({ projects }) {
  return (
    <ul className="border-t border-line">
      {projects.map((p, i) => (
        <li key={p.slug}>
          <Link
            to={`/projects/${p.slug}`}
            className="group flex items-center gap-5 border-b border-line py-7 transition-colors duration-300 md:gap-8 md:py-9"
          >
            {/* index */}
            <span className="label w-8 shrink-0 transition-colors group-hover:text-signal">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* title + meta */}
            <span className="min-w-0 flex-1">
              <span className="flex flex-wrap items-baseline gap-x-4">
                <span className="font-display text-3xl font-semibold leading-none tracking-tight text-bone transition-all duration-300 group-hover:text-signal md:text-5xl lg:text-6xl group-hover:md:translate-x-2">
                  {p.title}
                </span>
              </span>
              <span className="mt-2 block text-sm text-mute md:mt-3">
                {p.role} · {p.tags[0]}
              </span>
            </span>

            {/* year + arrow */}
            <span className="hidden shrink-0 items-center gap-6 sm:flex">
              <span className="label">{p.timeframe}</span>
              <span className="text-2xl text-mute transition-all duration-300 group-hover:translate-x-1 group-hover:text-signal">
                →
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
