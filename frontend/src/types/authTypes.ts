import type { FormEventHandler } from "react";
import type {
  UseFormRegister,
  UseFormWatch,
  Path,
  RegisterOptions,
  FieldValues,
} from "react-hook-form";

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

// ====== responses
export interface OtpResponse {
  phoneNumber: string;
  message: string;
}

// ====== form fields
export type SendOtpFormFields = {
  phoneNumber: string;
};

// ====== component props
export type SendOTPFormProps = {
  register: UseFormRegister<SendOtpFormFields>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  isSendingOTP: boolean;
};
export type CheckOTPFormProps = {
  phoneNumber: string;
  onMoveBack: () => void;
  reSendOTP: (payload: getOtpPayload) => Promise<void>;
  otpResponse: OtpResponse | undefined;
};
export type RadioInputProps<T extends FieldValues> = {
  label: string;
  value: string;
  name: Path<T>;
  id: string;
  register: UseFormRegister<T>;
  validationSchema?: RegisterOptions<T, Path<T>>;
  watch: UseFormWatch<T>;
};
