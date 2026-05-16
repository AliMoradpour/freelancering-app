import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import type { SendOTPFormProps } from "../../types/authTypes";

const SendOTPForm = ({
  onSubmit,
  isSendingOTP,
  register,
}: SendOTPFormProps) => {
  return (
    <form className="space-y-10" onSubmit={onSubmit}>
      <TextField label="شماره موبایل" name="phoneNumber" register={register} />
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
