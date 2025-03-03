import { useState } from "react";
import TextField from "../../ui/TextField";

const SendOTPFrom: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <form className="space-y-8">
      <TextField
        name="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        label="شماره همراه"
      />
      <button type="submit" className="btn btn--primary">
        ارسال کد تایید
      </button>
    </form>
  );
};
export default SendOTPFrom;
