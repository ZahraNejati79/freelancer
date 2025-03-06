import { useState } from "react";
import SendOTPFrom from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";

const AuthContainer: React.FC = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPFrom
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            setStep={setStep}
          />
        );
      case 2:
        return <CheckOTPForm phoneNumber={phoneNumber} />;
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
};
export default AuthContainer;
