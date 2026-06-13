import { useState } from "react";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";

function ProjectHeader() {
  const [isAddingProject, setIsAddingProject] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-between">
      <h4 className="font-bold text-secondary-800">پروژه های شما</h4>
      <button
        className="btn btn--primary"
        onClick={() => setIsAddingProject(true)}
      >
        پروژه جدید
      </button>
      <Modal
        title="اضافه کردن پروژه جدید"
        open={isAddingProject}
        onClose={() => setIsAddingProject(false)}
      >
        <CreateProjectForm onClose={() => setIsAddingProject(false)} />
      </Modal>
    </div>
  );
}

export default ProjectHeader;
