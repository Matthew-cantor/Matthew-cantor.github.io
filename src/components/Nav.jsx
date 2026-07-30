import { NavLink } from "react-router-dom";

// Floating right-side icon rail. Replaces the top header.
const links = [
  { to: "/", label: "Home", end: true, icon: HomeIcon },
  { to: "/projects", label: "Projects", icon: HammerIcon },
  { to: "/about", label: "About", icon: ProfileIcon },
];

export default function Nav() {
  return (
    <nav
      aria-label="Primary"
      className="fixed right-3 top-1/2 z-50 -translate-y-1/2 md:right-5"
    >
      <ul className="flex flex-col gap-1.5 rounded-full border border-line bg-ink-2/70 p-1.5 backdrop-blur-md">
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              end={l.end}
              aria-label={l.label}
              className={({ isActive }) =>
                `group relative grid h-11 w-11 place-items-center rounded-full transition-colors duration-300 ${
                  isActive
                    ? "bg-signal text-ink"
                    : "text-mute hover:bg-ink-3 hover:text-bone"
                }`
              }
            >
              <l.icon />
              {/* Hover tooltip */}
              <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-md border border-line bg-ink-3 px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-bone opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                {l.label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ── Icons (inherit currentColor) ──
function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V20a1 1 0 0 0 1 1h3v-6h6v6h3a1 1 0 0 0 1-1V9.5" />
    </svg>
  );
}

function HammerIcon() {
  // Lucide "hammer"
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
      <path d="m18 15 4-4" />
      <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
    </svg>
  );
}
