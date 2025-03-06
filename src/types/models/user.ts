export interface User {
  id: string;
  biography: string | null;
  phoneNumber: string;
  otp: {
    code: number;
    expiresIn: Date | string;
  };
  resetLink: string | null;
  isVerifiedPhoneNumber: boolean;
  isActive: boolean;
  status: number;
  role: "FRANCHISEE" | "ADMIN" | "USER";
  createdAt: Date | string;
  updatedAt: Date | string;
}
