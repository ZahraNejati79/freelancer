import http from "./httpServices";

export function getOtp(data) {
  return http.get("/user/get-otp", data);
}

export function checkOtp(data) {
  return http.post("/user/check-otp", data);
}
