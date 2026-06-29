import type { OwnerProjectType } from "../../types/projectTypes";

export default function Stats({ projects }: { projects: OwnerProjectType[] }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter((p) => p.proposals?.some((proposal) => proposal.status === 2)).length;
  const numOfProposals = projects.reduce((acc, curr) => acc + (curr.proposals?.length ?? 0), 0);
  return <div>Stats</div>;
}
