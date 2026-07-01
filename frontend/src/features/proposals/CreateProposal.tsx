import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import useCreateProposal from "./useCreateProposal";
import type { CreateProposalForm, CreateProposalProps } from "../../types/proposalTypes";

export default function CreateProposal({ onClose, projectId }: CreateProposalProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateProposalForm>();

  const { createProposal, isCreating } = useCreateProposal();

  const onSubmit = (data: CreateProposalForm) => {
    // Spread form fields + projectId → matches CreateProposalPayload exactly
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => onClose(),
      },
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <TextField<CreateProposalForm>
          label="توضیحات پروژه"
          name="description"
          type="text"
          register={register}
          required
          validationSchema={{
            required: "توضیحات پروژه ضروری است.",
            minLength: { value: 10, message: "طول توضیحات نامعتبر است" },
          }}
          errors={errors}
        />
        <TextField<CreateProposalForm>
          label="قیمت"
          name="price"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "قیمت پروژه ضروری است.",
          }}
          errors={errors}
        />
        <TextField<CreateProposalForm>
          label="مدت زمان"
          name="duration"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "مدت زمان پروژه ضروری است.",
          }}
          errors={errors}
        />

        <div className="mt-8">
          {isCreating ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
