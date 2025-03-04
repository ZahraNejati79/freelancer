import { useState } from "react";
import OTPInput from "react-otp-input";

const CheckOTPForm: React.FC = () => {
  const [otp, setOtp] = useState("");
  return (
    <form className="max-w-sm space-y-8 w-full">
      <p>کد تایید را وارد کنید</p>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        containerStyle="flex item-center gap-2"
        inputStyle={{
          backgroundColor: "white",
          border: "1px solid var(--color-primary-500)",
          width: "2.5rem",
          padding: "0.5rem 0.2rem",
          borderRadius: "0.5rem",
        }}
      />
      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
};
export default CheckOTPForm;
