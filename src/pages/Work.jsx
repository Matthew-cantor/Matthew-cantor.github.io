import { projects } from "../content/projects.js";
import { Section } from "../components/ui.jsx";
import PageHeader from "../components/PageHeader.jsx";
import ProjectIndex from "../components/ProjectIndex.jsx";

export default function Work() {
  return (
    <>
      <PageHeader
        label={`Projects - ${String(projects.length).padStart(2, "0")}`}
        title={<>Projects.</>}
        lead="A closer look at what I've built - the problems, the calls I made, and what came of them."
      />

      <Section className="pt-6">
        <ProjectIndex projects={projects} />
      </Section>
    </>
  );
}
