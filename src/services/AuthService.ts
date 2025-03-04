import http from "./httpService";

export function getOtp(data: { phomeNumber: string }) {
  return http.post("/user/get-otp", data);
}

export function checkOtp(data: { phomeNumber: string; otp: string }) {
  return http.post("/user/check-otp", data);
}
