import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProposalApi, type CreateProposalPayload } from "../../services/proposalService";

type ApiError = {
  response?: { data?: { message?: string } };
  message?: string;
};

export default function useCreateProposal() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createProposal } = useMutation<any, ApiError, CreateProposalPayload>({
    mutationFn: createProposalApi,

    onSuccess: (data) => {
      toast.success(data?.message ?? "پروپوزال با موفقیت ثبت شد");
      queryClient.invalidateQueries({
        queryKey: ["proposals"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message ?? err?.message ?? "خطایی رخ داد"),
  });

  return { isCreating, createProposal };
}
