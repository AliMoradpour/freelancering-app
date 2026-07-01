import Table from "../../../ui/Table";
import toLocalDate from "../../../utils/toLocalDate";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";
import { MdAssignmentAdd } from "react-icons/md";
import type { ProjectProps } from "./types";



const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

function ProjectRow({ project, index }: { project: ProjectProps; index: number }) {
  const { _id, title, budget, deadline, status } = project;
  return (
    <Table.Row key={_id}>
      <td>{index + 1}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{toPersianNumbersWithComma(budget)}</td>
      <td>{toLocalDate(deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`}>{projectStatus[status].label}</span>
      </td>
      <td>
        <button>
          <MdAssignmentAdd className="size-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
