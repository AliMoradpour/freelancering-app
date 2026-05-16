import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/projectsService";
import type { ownerProjectType } from "../../types/projectTypes";

const useOwnerProjects = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectsApi,
  });

  const { projects }: { projects: ownerProjectType[] } = data ?? {};
  return { isLoading, projects };
};

export default useOwnerProjects;
