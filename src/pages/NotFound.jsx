import { Section, ArrowButton, Label } from "../components/ui.jsx";

export default function NotFound() {
  return (
    <Section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <Label>Error 404</Label>
      <h1 className="mt-4 font-display text-[clamp(4rem,18vw,11rem)] font-extrabold leading-none tracking-tighter">
        4<span className="text-signal">0</span>4
      </h1>
      <p className="mt-4 max-w-md text-mute">
        This page wandered off the roadmap. Let's get you back to something shipped.
      </p>
      <div className="mt-10">
        <ArrowButton to="/">Back home</ArrowButton>
      </div>
    </Section>
  );
}
