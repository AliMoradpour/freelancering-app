import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";
import type { createProjectFormValue } from "../../types/projectTypes";
import RHFSelect from "../../ui/RHFSelect";
import DatePickerField from "../../ui/DatePickerField";
import { useState } from "react";
import type { DateObject } from "react-multi-date-picker";

function CreateProject() {
  const [tags, setTags] = useState<string[]>([]);
  const [date, setDate] = useState<DateObject | null>(null);

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
      <RHFSelect
        label="دسته بندی"
        required
        name="category"
        register={register}
        options={[]}
      />
      <div>
        <label className="mb-2 block text-secondary-700">تگ</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} label="ددلاین" />
      <button type="submit" className="btn btn--primary w-full">
        اضافه کردن
      </button>
    </form>
  );
}

export default CreateProject;
