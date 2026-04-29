import { useState } from "react";

type Props = {};

const SendOTPForm = ({}: Props) => {

  const [phoneNumber, setPhoneNumber] = useState<stringtring>('')

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
            className="w-full py-3 px-4 rounded-xl text-secondary-900 border border-gray-300 hover:border-primary-500 focus:border-primary-500 focus:bg-white focus:shadow-lg focus:shadow-primary-200 transition-all duration-300 ease-out"
          />
        </div>
        <button className="px-4 py-2 font-bold bg-primary-900 text-white w-full rounded-xl hover:bg-primary-800 shadow-lg shadow-primary-300 transition-all duration-300">ارسال کد تایید</button>
      </form>
    </div>
  );
};

export default SendOTPForm;
