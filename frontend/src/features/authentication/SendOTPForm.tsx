import { useState, type ChangeEvent } from "react";
import TextField from "../../ui/TextField";

type Props = {};

const SendOTPForm = ({}: Props) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event?.target?.value);
  };

  return (
    <div>
      <form className="space-y-10">
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={changeHandler}
        />
        <button className="btn btn--primary w-full">ارسال کد تایید</button>
      </form>
    </div>
  );
};

export default SendOTPForm;
