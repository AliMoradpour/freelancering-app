import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../ui/Loading";

export type FormValue = {
  status: string;
};

export default function ChangeProposalStatus({ proposalId, onClose }: { proposalId: string; onClose: () => void }) {
  const { id: projectId } = useParams();
  const { register, handleSubmit } = useForm<FormValue>();
  const queryClient = useQueryClient();

  const { isUpdating, changeProposalStatus } = useChangeProposalStatus();

  const options = [
    { label: "رد شده", value: 0 },
    { label: "در انتظار تایید", value: 1 },
    { label: "تایید شده", value: 2 },
  ];

  const onSubmit = (data: FormValue) => {
    changeProposalStatus(
      { id: proposalId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["project", projectId] });
        },
      },
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect name="status" label="تغییر وضعیت" register={register} options={options} required />
        {isUpdating ? (
          <Loading />
        ) : (
          <button className="mt-8 btn btn--primary w-full" type="submit">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}
