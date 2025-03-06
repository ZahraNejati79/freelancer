import http from "./httpService";

export function getOtp(data: { phoneNumber: string }) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export function checkOtp(data: { phoneNumber: string; otp: string }) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}
