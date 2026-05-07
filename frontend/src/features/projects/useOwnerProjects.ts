import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/projectsService";

const useOwnerProjects = () => {
  const { isPending, data } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectsApi,
  });

  const { projects } = data || {};

  return { isPending, projects };
};

export default useOwnerProjects;
