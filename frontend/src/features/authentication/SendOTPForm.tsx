import { type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

type SendOTPFormProps = {
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  onSubmit: (event: { preventDefault: () => void }) => void;
  isSendingOTP: boolean;
};

const SendOTPForm = ({
  phoneNumber,
  setPhoneNumber,
  onSubmit,
  isSendingOTP,
}: SendOTPFormProps) => {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event?.target?.value);
  };

  return (
    <form className="space-y-10" onSubmit={onSubmit}>
      <TextField
        label="شماره موبایل"
        name="phoneNumber"
        value={phoneNumber}
        onChange={changeHandler}
      />
      {isSendingOTP ? (
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
