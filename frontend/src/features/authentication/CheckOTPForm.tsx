import { useState } from "react";
import OTPInput from "react-otp-input";

const CheckOTPForm = () => {
  const [otp, setOtp] = useState<string>("");

  return (
    <div>
      <form className="space-y-10">
        <h3 className="font-bold text-secondary-800">کد تایید را وارد کنید</h3>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => <input {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle="w-12! h-12! border border-primary-300 shadow-lg shadow-primary-200 rounded-xl text-primary-900"
        />
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  );
};

export default CheckOTPForm;
