import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";
import type { OwnerProjectType } from "../../types/projectTypes";

interface ToggleProjectStatusProps {
  project: OwnerProjectType;
}

function ToggleProjectStatus({ project }: ToggleProjectStatusProps) {
  const { status } = project;
  const enabled = status === "OPEN";

  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus({ id: project._id, data: { status: newStatus } });
  };

  return (
    <div className="w-20">
      {isUpdating ? (
        <Loading height="20" width="50" />
      ) : (
        <Toggle label={status === "OPEN" ? "باز" : "بسته"} enabled={enabled} onChange={toggleHandler} />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
