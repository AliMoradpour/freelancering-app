import { useState, type ChangeEvent } from "react";
import TextField from "../../ui/TextField";

type Props = {};

const SendOTPForm = ({}: Props) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event?.target?.value);
  };

  const sendOTPHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <div>
      <form className="space-y-10" onSubmit={sendOTPHandler}>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={changeHandler}
        />
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
};

export default SendOTPForm;
