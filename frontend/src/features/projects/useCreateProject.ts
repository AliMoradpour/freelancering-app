import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../../services/projectsService";
import type { createProjectPayload } from "../../types/projectTypes";
import toast from "react-hot-toast";

export default function useCreateProject() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createProject } = useMutation<
    any,
    any,
    createProjectPayload
  >({
    mutationFn: createProjectApi,

    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isCreating, createProject };
}
