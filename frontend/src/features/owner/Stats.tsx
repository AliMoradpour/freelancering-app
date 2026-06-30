import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from "react-icons/hi";
import type { OwnerProjectType } from "../../types/projectTypes";
import Stat from "./Stat";

export default function Stats({ projects }: { projects: OwnerProjectType[] }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter((p) => p.proposals?.some((proposal) => proposal.status === 2)).length;
  const numOfProposals = projects.reduce((acc, curr) => acc + (curr.proposals?.length ?? 0), 0);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
      <Stat color="primary" title="پروژه ها" value={numOfProjects} icon={<HiOutlineViewGrid className="size-20" />} />
      <Stat color="green" title="پروژه های واگذار شده" value={numOfAcceptedProjects} icon={<HiCurrencyDollar className="size-20" />} />
      <Stat color="yellow" title="درخواست ها" value={numOfProposals} icon={<HiCollection className="size-20" />} />
    </div>
  );
}
