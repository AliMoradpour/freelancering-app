import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";

const CompleteProfileForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const submitHandler = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const { user, message } = await mutateAsync({ name, email, role });
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
    <div className="w-full max-w-sm pt-20">
      <h2 className="font-black text-lg mb-8">اطلاعات خود را تکمیل کنید</h2>
      <form className="space-y-8" onSubmit={submitHandler}>
        <TextField
          label="نام و نام خانوادگی"
          name="name"
          value={name}
          onChange={(e) => setName(e?.target.value)}
        />
        <TextField
          label="ایمیل"
          name="email"
          value={email}
          onChange={(e) => setEmail(e?.target.value)}
        />

        <div className="flex justify-center gap-x-10 items-center">
          <RadioInput
            label="کارفرما"
            name="role"
            value="OWNER"
            id="OWNER"
            onChange={(e) => setRole(e?.target.value)}
            checked={role === "OWNER"}
          />
          <RadioInput
            label="فریلنسر"
            name="role"
            value="FREELANCER"
            id="FREELANCER"
            onChange={(e) => setRole(e?.target.value)}
            checked={role === "FREELANCER"}
          />
        </div>

        {isPending ? (
          <Loading />
        ) : (
          <button className="btn btn--primary w-full">تکمیل فرم</button>
        )}
      </form>
    </div>
  );
};

export default CompleteProfileForm;
