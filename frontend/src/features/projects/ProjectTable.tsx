import useOwnerProjects from "./useOwnerProjects";

function ProjectTable() {
  const { isPending, projects } = useOwnerProjects();
  console.log(projects);
  return <div>Project Table</div>;
}

export default ProjectTable;
