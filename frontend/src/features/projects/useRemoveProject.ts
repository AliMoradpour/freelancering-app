import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/projectsService";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";

export default function useRemoveProject() {
  const queryClient = useQueryClient();

  const { mutate: removeProject, isPending: isDeleting } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err: AxiosError<{ message: string }>) => {
      toast.error(err?.response?.data?.message ?? "خطایی رخ داد");
    },
  });

  return { removeProject, isDeleting };
}