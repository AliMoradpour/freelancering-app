import { useMutation } from "@tanstack/react-query";
import changeProposalStatusApi from "../../services/proposalService";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";

export default function useChangeProposalStatus() {
  const { isPending: isUpdating, mutate: changeProposalStatus } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err: AxiosError<{ message: string }>) => {
      toast.error(err?.response?.data?.message ?? "خطایی رخ داد");
    },
  });

  return { isUpdating, changeProposalStatus };
}
