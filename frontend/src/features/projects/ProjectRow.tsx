import { useState } from "react";
import type { owenrProjectType } from "../../types/projectTypes";
import Table from "../../ui/Table";
import toLocalDate from "../../utils/toLocalDate";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import Modal from "../../ui/Modal";

function ProjectRow({
  project,
  index,
}: {
  project: owenrProjectType;
  index: number;
}) {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  return (
    <Table.Row key={project._id}>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category?.title || "-"}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDate(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-50">
          {project.tags.map((tag: string) => (
            <span key={tag} className="badge badge--secondary">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        {project.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )}
      </td>
      <td>
        <div className="flex items-center gap-x-4">
          {/* Edit  */}
          <button onClick={() => setIsEditOpen(true)}>
            <TbPencilMinus className="w-5 h-5 text-primary-900" />
          </button>
          <Modal
            title="Edit Content"
            open={isEditOpen}
            onClose={() => setIsEditOpen(false)}
          >
            This modal is for editing purposess
          </Modal>
          {/* Delete */}
          <button onClick={() => setIsDeleteOpen(true)}>
          <HiOutlineTrash className="w-5 h-5 text-error" />
          </button>
          <Modal
            title="Delete Content"
            open={isDeleteOpen}
            onClose={() => setIsDeleteOpen(false)}
          >
            This modal is for Deleting purposess
          </Modal>
        </div>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
