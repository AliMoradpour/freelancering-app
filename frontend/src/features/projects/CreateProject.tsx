import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import type { projectFormValue } from "../../types/projectTypes";

function CreateProject() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<projectFormValue>();

  const onSubmit = (data: projectFormValue) => {
    console.log(data);
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField<projectFormValue>
        label="عنوان پروژه"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان پروژه ضروری است.",
          minLength: {
            value: 10,
            message: "طول عنوان نامعتبر است",
          },
        }}
        errors={errors}
      />

      <TextField<projectFormValue>
        label="توضیحات"
        name="description"
        register={register}
        validationSchema={{
          required: "توضیحات ضروری است.",
        }}
        errors={errors}
      />
      <TextField<projectFormValue>
        label="بودجه"
        name="budget"
        register={register}
        validationSchema={{
          required: "بودجه‌ی پروژه ضروری است.",
          valueAsNumber: true,
        }}
        type="number"
        errors={errors}
      />
      <button type="submit" className="btn btn--primary w-full">
        اضافه کردن
      </button>
    </form>
  );
}

export default CreateProject;
