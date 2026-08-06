import { Link } from "react-router-dom";
import { site } from "../content/site.js";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Link to="/" className="group inline-flex items-center gap-2.5">
              <img
                src="/mclogo.png"
                alt=""
                width="28"
                height="28"
                className="h-7 w-7 rounded-md object-cover transition-transform duration-300 group-hover:rotate-6"
              />
              <span className="font-display text-lg font-semibold tracking-tight">
                {site.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mute">
              {site.role} - {site.school}.
            </p>
          </div>

          <nav className="flex gap-x-8 gap-y-2">
            <Link to="/projects" className="link-underline text-mute hover:text-bone">
              Projects
            </Link>
            <Link to="/about" className="link-underline text-mute hover:text-bone">
              About
            </Link>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-sm text-mute-2 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}. {site.location}.
          </span>
          <span className="font-mono text-xs">
            Built with React · Hosted on GitHub Pages
          </span>
        </div>
      </div>
    </footer>
  );
}
