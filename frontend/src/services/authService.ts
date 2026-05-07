import type {
  checkOtpPayload,
  completeProfilePayload,
  getOtpPayload,
} from "../types/authTypes";
import http from "./httpService";

export function getOTP(payload: getOtpPayload) {
  return http.post("/user/get-otp", payload).then(({ data }) => data?.data);
}

export function checkOTP(payload: checkOtpPayload) {
  return http.post("/user/check-otp", payload).then(({ data }) => data.data);
}

export function completeProfile(payload: completeProfilePayload) {
  return http
    .post("/user/complete-profile", payload)
    .then(({ data }) => data.data);
}

export function getUser() {
  return http.get("/user/profile").then(({ data }) => data.data);
}
