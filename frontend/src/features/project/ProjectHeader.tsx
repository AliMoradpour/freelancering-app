import type { ownerProjectType } from "../../types/projectTypes";

export default function ProjectHeader({ project }: { project: ownerProjectType }) {
  return <div>{project.title}</div>;
}
