import type { FormEventHandler } from "react";
import type { UseFormRegister, UseFormWatch, Path, RegisterOptions, FieldValues, FieldErrors } from "react-hook-form";

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

export type TextInputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  validationSchema?: RegisterOptions<T, Path<T>>;
  type?: string;
  required?: boolean;
  errors?: FieldErrors<T>;
  placeholder?: string;
};

type RadioOption = {
  value: string;
  label: string;
};
export type RadioInputProps<T extends FieldValues> = {
  label: string;
  value: string;
  id: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  validationSchema?: RegisterOptions<T, Path<T>>;
  watch: UseFormWatch<T>;
  errors?: FieldErrors<T>;
};
export type RadioInputGroupProps<T extends FieldValues> = {
  label: string;
  register: UseFormRegister<T>;
  watch: UseFormWatch<T>;
  errors?: FieldErrors<T>;
  configs: {
    name: Path<T>;
    validationSchema?: RegisterOptions<T, Path<T>>;
    options: RadioOption[];
  };
};

type SelectOptions = {
  value: string | number;
  label: string;
};
export type SelectInputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  options: SelectOptions[];
  required: boolean;
};
