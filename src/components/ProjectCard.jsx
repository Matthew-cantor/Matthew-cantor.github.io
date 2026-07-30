import { Link } from "react-router-dom";
import { Tag } from "./ui.jsx";

// Card used on Home (featured) and Work (full list).
export default function ProjectCard({ project, index }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-line bg-ink-2 transition-colors duration-300 hover:border-mute-2"
    >
      {/* Cover */}
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-3">
        <CoverArt project={project} />
        <span className="absolute left-4 top-4 label !text-mute-2">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold leading-tight">
            {project.title}
          </h3>
          <span className="label whitespace-nowrap">{project.timeframe}</span>
        </div>
        <p className="text-sm leading-relaxed text-mute">{project.summary}</p>
        <div className="mt-1 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <span className="mt-2 inline-flex items-center gap-2 text-sm text-bone transition-colors group-hover:text-signal">
          Read project
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

// Renders only the project's cover image, no placeholder.
export function CoverArt({ project }) {
  if (!project.cover) return null;
  const fit = project.coverFit === "contain" ? "object-contain p-8" : "object-cover";

  return (
    <img
      src={project.cover}
      alt={project.title}
      loading="lazy"
      className={`absolute inset-0 h-full w-full ${fit} transition-transform duration-500 group-hover:scale-[1.03]`}
    />
  );
}
