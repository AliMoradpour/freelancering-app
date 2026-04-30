import { useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOTP } from "../../services/authService";
import toast from "react-hot-toast";

const AuthContainer = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const { isPending, data, mutateAsync } = useMutation({
    mutationFn: getOTP,
  });
  const sendOTPHandler = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message);
      setStep(2);
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    }
  };

  switch (step) {
    case 1:
      return (
        <SendOTPForm
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          onSubmit={sendOTPHandler}
          isSendingOTP={isPending}
        />
      );
    case 2:
      return (
        <CheckOTPForm
          phoneNumber={phoneNumber}
          onMoveBack={() => setStep((s) => s - 1)}
          reSendOTP={sendOTPHandler}
          otpResponse={data}
        />
      );
    default:
      return null;
  }
};

export default AuthContainer;
