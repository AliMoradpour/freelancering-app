import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import type { createProjectFormValue } from "../../types/projectTypes";

function CreateProject() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createProjectFormValue>();

  const onSubmit = (data: createProjectFormValue) => {
    console.log(data);
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField<createProjectFormValue>
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

      <TextField<createProjectFormValue>
        label="توضیحات"
        name="description"
        register={register}
        validationSchema={{
          required: "توضیحات ضروری است.",
        }}
        errors={errors}
      />
      <TextField<createProjectFormValue>
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
