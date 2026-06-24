import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProjectApi } from "../../services/projectsService";
import type { createProjectPayload } from "../../types/projectTypes";
import toast from "react-hot-toast";

type EditProjectVariables = {
  id: string;
  newProject: createProjectPayload;
};

export default function useEditProject() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editProject } = useMutation({
    mutationFn: ({ id, newProject }: EditProjectVariables) =>
      editProjectApi({ id, newProject }),
    onSuccess: (data) => {
      toast.success(data?.message ?? "پروژه ویرایش شد");
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err: Error) => toast.error(err?.message),
  });

  return { isEditing, editProject };
}
