import { useState } from "react";
import type { ownerProjectType } from "../../types/projectTypes";
import Table from "../../ui/Table";
import toLocalDate from "../../utils/toLocalDate";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";

function ProjectRow({ project, index }: { project: ownerProjectType; index: number }) {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  const { removeProject, isDeleting } = useRemoveProject();

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
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        <div className="flex items-center gap-x-4">
          {/* Edit  */}
          <button onClick={() => setIsEditOpen(true)}>
            <TbPencilMinus className="w-5 h-5 text-primary-900" />
          </button>
          <Modal title={`ویرایش ${project.title}`} open={isEditOpen} onClose={() => setIsEditOpen(false)}>
            <CreateProjectForm onClose={() => setIsEditOpen(false)} projectToEdit={project} />
          </Modal>
          {/* Delete */}
          <button onClick={() => setIsDeleteOpen(true)}>
            <HiOutlineTrash className="w-5 h-5 text-error" />
          </button>
          <Modal title={`حذف ${project.title}`} open={isDeleteOpen} onClose={() => setIsDeleteOpen(false)}>
            <ConfirmDelete
              resourseName={project.title}
              onClose={() => setIsDeleteOpen(false)}
              onConfirm={() =>
                removeProject(project._id, {
                  onSuccess: () => {
                    setIsDeleteOpen(false);
                  },
                })
              }
              disabled={isDeleting}
            />
          </Modal>
        </div>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
