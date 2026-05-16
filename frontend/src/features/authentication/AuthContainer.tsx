import { useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOTP } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import {
  type getOtpPayload,
  type SendOtpFormFields,
} from "../../types/authTypes";

const AuthContainer = () => {
  const [step, setStep] = useState(1);
  const { handleSubmit, register, getValues } = useForm<SendOtpFormFields>();

  const {
    isPending: isSendingOTP,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOTP,
  });

  const sendOTPHandler = async (formData: getOtpPayload) => {
    try {
      const { message } = await mutateAsync(formData);
      toast.success(message);
      setStep(2);
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    }
  };

  switch (step) {
    case 1:
      return (
        <SendOTPForm
          isSendingOTP={isSendingOTP}
          onSubmit={handleSubmit(sendOTPHandler)}
          register={register}
        />
      );

    case 2:
      return (
        <CheckOTPForm
          phoneNumber={getValues("phoneNumber")}
          onMoveBack={() => setStep((s) => s - 1)}
          reSendOTP={sendOTPHandler}
          otpResponse={otpResponse}
        />
      );

    default:
      return null;
  }
};

export default AuthContainer;
