import Table from "../../../ui/Table";
import toLocalDate from "../../../utils/toLocalDate";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";
import { MdAssignmentAdd } from "react-icons/md";
import type { ProjectProps } from "./types";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import CreateProposal from "../../proposals/CreateProposal";

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

  const [open, setOpen] = useState(false);

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
        <Modal open={open} onClose={() => setOpen(false)} title={`درخواست انجام پروژه‌ی ${title}`}>
          <CreateProposal onClose={() => setOpen(false)} projectId={_id}/>
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="size-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
