import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOTP } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";

const SendOTPForm = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOTP,
  });

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event?.target?.value);
  };

  const sendOTPHandler = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message);
      setStep(2);
    } catch (err: { message: string }) {
      toast.error(err?.message);
    }
  };

  return (
    <form className="space-y-10" onSubmit={sendOTPHandler}>
      <TextField
        label="شماره موبایل"
        name="phoneNumber"
        value={phoneNumber}
        onChange={changeHandler}
      />
      {isPending ? (
        <Loading />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      )}
    </form>
  );
};

export default SendOTPForm;
