import type { Dispatch, SetStateAction } from "react";

// ====== services 
export type getOtpPayload = {
  phoneNumber: string;
};
export type checkOtpPayload = {
  phoneNumber: string;
  otp: string;
};
export type completeProfilePayload = {
  email: string;
  name: string;
  role: string;
};




// ====== components 
interface OtpResponse {
  phoneNumber: string;
  message: string;
}
export type CheckOTPFormProps = {
  phoneNumber: string;
  onMoveBack: () => void;
  reSendOTP: (event: { preventDefault: () => void }) => void;
  otpResponse: OtpResponse | null | undefined;
};

export type SendOTPFormProps = {
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  onSubmit: (event: { preventDefault: () => void }) => void;
  isSendingOTP: boolean;
};