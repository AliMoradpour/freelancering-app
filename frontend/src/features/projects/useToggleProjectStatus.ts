import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { toggleProjectStatusApi } from "../../services/projectsService";

interface ToggleStatusVariables {
  id: string;
  data: { status: string };
}

export default function useToggleProjectStatus() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: toggleProjectStatus } = useMutation({
    mutationFn: ({ id, data }: ToggleStatusVariables) =>
      toggleProjectStatusApi({ id, data }),
    onSuccess: (data) => {
      toast.success(data?.message ?? "پروژه ویرایش شد");
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err: Error) => toast.error(err?.message),
  });

  return { isUpdating, toggleProjectStatus };
}