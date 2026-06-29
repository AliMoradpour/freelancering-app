import { HiArrowRight } from "react-icons/hi";
import type { OwnerProjectType } from "../../types/projectTypes";
import useMoveBack from "../../hooks/useMoveBack";

export default function ProjectHeader({ project }: { project: OwnerProjectType }) {
  const moveBack = useMoveBack();
  return (
    <div className="flex items-center gap-x-4 mb-8">
      <button onClick={moveBack}>
        <HiArrowRight className="size-5 text-secondary-500" />
      </button>
      <h1 className="font-black text-secondary-700 text-xl">لیست درخواست های {project.title}</h1>
    </div>
  );
}
