import { useState } from "react";
import SendOTPFrom from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";

const AuthContainer: React.FC = () => {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOTPFrom setStep={setStep} />;
      case 2:
        return <CheckOTPForm />;
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
};
export default AuthContainer;
