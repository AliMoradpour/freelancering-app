import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup";
import type { completeProfilePayload } from "../../types/authTypes";

const CompleteProfileForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<completeProfilePayload>();

  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data: completeProfilePayload) => {
    try {
      const { user, message } = await mutateAsync(data);
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      toast.success(message);
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <div className="flex flex-col gap-y-6 items-center pt-10">
      <h2 className="font-bold text-secondary-700 text-3xl mb-8">
        اطلاعات خود را تکمیل کنید
      </h2>
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <TextField<completeProfilePayload>
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            validationSchema={{
              required: "نام و نام خانوادگی ضروری است",
            }}
            errors={errors}
          />
          <TextField<completeProfilePayload>
            label="ایمیل"
            name="email"
            register={register}
            validationSchema={{
              required: "ایمیل ضروری است",
              pattern: {
                message: "ایمیل نامعتبر است",
                value: /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i,
              },
            }}
            errors={errors}
          />

          <RadioInputGroup
            errors={errors}
            register={register}
            watch={watch}
            label="نقش"
            configs={{
              name: "role",
              validationSchema: { required: "انتخاب نقش ضروری است" },
              options: [
                {
                  value: "OWNER",
                  label: "کارفرما",
                },
                {
                  value: "FREELANCER",
                  label: "فریلنسر",
                },
              ],
            }}
          />

          <div>
            {isPending ? (
              <Loading />
            ) : (
              <button className="btn btn--primary w-full">تکمیل فرم</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfileForm;
