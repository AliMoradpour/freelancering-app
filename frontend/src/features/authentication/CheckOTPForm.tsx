import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOTP } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import type { CheckOTPFormProps } from "../../types/authTypes";

const RESEND_TIME = 90;

const CheckOTPForm = ({
  phoneNumber,
  onMoveBack,
  reSendOTP,
  otpResponse,
}: CheckOTPFormProps) => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState<string>("");
  const [timer, setTimer] = useState<number>(RESEND_TIME);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOTP,
  });

  const checkOTPHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);

      if (!user.isActive) return navigate("/complete-profile");

      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }

      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (timer <= 0) return;

    const time = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    return () => clearInterval(time);
  }, [timer]);

  return (
    <div className="space-y-8">
      <button className="flex items-center gap-x-2" onClick={onMoveBack}>
        <HiArrowRight className="w-5 text-secondary-900" />
        بازگشت
      </button>

      {otpResponse && (
        <div className="flex items-center gap-2">
          <p className="text-secondary-500">
            کد برای {otpResponse.phoneNumber} ارسال شد
          </p>
          <button onClick={onMoveBack}>
            <CiEdit />
          </button>
        </div>
      )}

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
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </form>

      <div>
        {timer > 0 ? (
          <p className="text-secondary-500 font-light text-sm">
            {timer} ثانیه تا ارسال مجدد کد
          </p>
        ) : (
          <button
            className="text-sm text-secondary-500"
            onClick={() => reSendOTP({ phoneNumber })}
          >
            ارسال مجدد کد
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckOTPForm;
