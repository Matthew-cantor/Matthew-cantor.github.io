import { useEffect, useState } from "react";

// Fixed corner labels that frame the site like a designed object.
// Top-left wordmark + a live Toronto clock. Purely decorative (pointer-events
// none), stays clear of the right-side nav rail.
export default function MetaHud() {
  const time = useTorontoClock();

  return (
    <div className="pointer-events-none fixed left-5 top-5 z-40 hidden select-none font-mono text-[0.68rem] uppercase leading-relaxed tracking-[0.18em] text-mute-2 sm:block md:left-7 md:top-7">
      <div className="text-mute">Matthew Cantor</div>
      <div className="mt-1">
        <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-signal align-middle pulse-dot" />
        Toronto {time}
      </div>
    </div>
  );
}

function useTorontoClock() {
  const [time, setTime] = useState(() => fmt());
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function fmt() {
  try {
    return new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/Toronto",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(new Date());
  } catch {
    return "";
  }
}
