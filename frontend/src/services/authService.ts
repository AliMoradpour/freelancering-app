import http from "./httpService";

type getOtpPayload = {
  phoneNumber: string;
};
export function getOTP(payload: getOtpPayload) {
  return http.post("/user/get-otp", payload).then(({ data }) => data?.data);
}

type checkOtpPayload = {
  phoneNumber: string;
};
export function checkOTP(payload: checkOtpPayload) {
  return http.post("/user/check-otp", payload);
}
