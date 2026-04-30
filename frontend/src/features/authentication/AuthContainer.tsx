import { useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";

const AuthContainer = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState<string>("");


  switch (step) {
    case 1:
      return <SendOTPForm setStep={setStep} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>;
    case 2:
      return <CheckOTPForm phoneNumber={phoneNumber}/>;
    default:
      return null;
  }
};

export default AuthContainer;
