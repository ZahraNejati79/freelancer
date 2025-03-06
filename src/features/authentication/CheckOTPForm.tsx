import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/AuthService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../ui/Loading";

type Props = {
  phoneNumber: string;
};

const CheckOTPForm: React.FC<Props> = ({ phoneNumber }) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
        navigate("/");
      } else {
        navigate("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm space-y-8 w-full">
      <p>کد تایید را وارد کنید</p>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        containerStyle="flex flex-row-reverse items-center gap-2"
        inputStyle={{
          backgroundColor: "white",
          border: "1px solid var(--color-primary-500)",
          width: "2.5rem",
          padding: "0.5rem 0.2rem",
          borderRadius: "0.5rem",
        }}
      />
      {isPending ? (
        <Loading />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      )}
    </form>
  );
};
export default CheckOTPForm;
