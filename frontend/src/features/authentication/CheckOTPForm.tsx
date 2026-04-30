import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { checkOTP } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";

type CheckOTPFormProps = {
  phoneNumber: string;
};

const CheckOTPForm = ({ phoneNumber }: CheckOTPFormProps) => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState<string>("");

  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOTP,
  });

  const checkOTPHandler = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);

      if (user.isActive) {
        // push to dashboard base on user role
      } else {
        navigate("/complete-profile");
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <form className="space-y-10" onSubmit={checkOTPHandler}>
      <h3 className="font-bold text-secondary-800">کد تایید را وارد کنید</h3>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderInput={(props) => <input {...props} />}
        containerStyle="flex flex-row-reverse gap-x-2 justify-center"
        inputStyle="w-12! h-12! border border-primary-300 shadow-lg shadow-primary-200 rounded-xl text-primary-900"
      />
      {isPending ? (
        <Loading />
      ) : (
        <button className="btn btn--primary w-full">تایید</button>
      )}
    </form>
  );
};

export default CheckOTPForm;
