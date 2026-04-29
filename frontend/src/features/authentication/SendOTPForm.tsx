import { useState } from "react";

type Props = {};

const SendOTPForm = ({}: Props) => {

  const [phoneNumber, setPhoneNumber] = useState<string>('')

  return (
    <div>
      <form className="space-y-6">
        <div>
          <label htmlFor="phonenumber" className="text-secondary-900 mb-1">
            شماره موبایل
          </label>
          <input
            id="phonenumber"
            type="text"
            value={phoneNumber}
            onChange={(e)=> setPhoneNumber(e?.target?.value)}
            className="textField__input"
          />
        </div>
        <button className="btn btn--primary w-full">ارسال کد تایید</button>
      </form>
    </div>
  );
};

export default SendOTPForm;
