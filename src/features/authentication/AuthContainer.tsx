import { useState } from "react";
import SendOTPFrom from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/AuthService";
import toast from "react-hot-toast";

const AuthContainer: React.FC = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");

  const { isPending: isSendingOtp, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e: any) => {
    e.preventDefault();
    try {
      await mutateAsync({ phoneNumber });
      toast.success("تا دو دقیقه وقت داری کد 123456 رو ارسال کنی!");
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPFrom
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onSubmit={sendOtpHandler}
            isSendingOtp={isSendingOtp}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onResendOtp={sendOtpHandler}
            phoneNumber={phoneNumber}
            onBack={() => setStep(1)}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
};
export default AuthContainer;
