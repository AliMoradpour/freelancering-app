import TextField from "../../ui/TextField";
import { useForm, Controller } from "react-hook-form";
import type { createProjectFormValue, createProjectPayload, ownerProjectType } from "../../types/projectTypes";
import RHFSelect from "../../ui/RHFSelect";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import TagsInput from "../../ui/TagsInput";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject";

type Props = {
  onClose: () => void;
  projectToEdit?: ownerProjectType; // ✅ تغییر اصلی
};

function CreateProjectForm({ onClose, projectToEdit }: Props) {
  const editId = projectToEdit?._id;
  const isEditSession = Boolean(editId);

  const editValues: Partial<createProjectFormValue> = isEditSession
    ? {
        title: projectToEdit?.title,
        description: projectToEdit?.description,
        budget: String(projectToEdit?.budget ?? ""),
        category: projectToEdit?.category?._id ?? "",
        deadline: projectToEdit?.deadline ? new Date(projectToEdit.deadline) : undefined,
        tags: projectToEdit?.tags ?? [],
      }
    : {};

  const { categories } = useCategories();
  const { createProject, isCreating } = useCreateProject();
  const { editProject, isEditing } = useEditProject();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<createProjectFormValue>({
    defaultValues: editValues,
  });

  const onSubmit = (data: createProjectFormValue) => {
    const newProject: createProjectPayload = {
      ...data,
      deadline: data.deadline ? data.deadline.toISOString() : undefined,
    };

    if (isEditSession && editId) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        },
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  const isLoading = isCreating || isEditing;

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField<createProjectFormValue>
        label="عنوان پروژه"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان پروژه ضروری است.",
          minLength: { value: 10, message: "طول عنوان نامعتبر است" },
        }}
        errors={errors}
      />
      <TextField<createProjectFormValue>
        label="توضیحات"
        name="description"
        register={register}
        validationSchema={{ required: "توضیحات ضروری است." }}
        errors={errors}
      />
      <TextField<createProjectFormValue>
        label="بودجه"
        name="budget"
        register={register}
        validationSchema={{
          required: "بودجه‌ی پروژه ضروری است.",
        }}
        type="number"
        errors={errors}
      />
      <RHFSelect<createProjectFormValue>
        label="دسته بندی"
        required
        name="category"
        register={register}
        options={categories}
      />
      <div>
        <label className="mb-2 block text-secondary-700">تگ</label>
        <Controller
          name="tags"
          control={control}
          render={({ field: { value, onChange } }) => <TagsInput value={value ?? []} onChange={onChange} />}
        />
      </div>
      <DatePickerField<createProjectFormValue> label="ددلاین" name="deadline" control={control} />
      <div className="mt-8">
        {isLoading ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            {isEditSession ? "ویرایش پروژه" : "اضافه کردن"}
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateProjectForm;
