import { Link } from "react-router-dom";

// A small kit of shared primitives so styling stays consistent.

export function Label({ children, className = "" }) {
  return <span className={`label ${className}`}>{children}</span>;
}

export function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}>
      {children}
    </section>
  );
}

// Lime arrow button. `to` -> router link, `href` -> external/anchor.
export function ArrowButton({ children, to, href, variant = "solid", className = "" }) {
  const base =
    "group inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300";
  const styles =
    variant === "solid"
      ? "bg-signal text-ink hover:bg-bone"
      : "border border-line text-bone hover:border-signal hover:text-signal";
  const inner = (
    <>
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </>
  );
  if (to) {
    return (
      <Link to={to} className={`${base} ${styles} ${className}`}>
        {inner}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {inner}
    </a>
  );
}

export function Tag({ children }) {
  return (
    <span className="rounded-full border border-line px-3 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-mute">
      {children}
    </span>
  );
}
