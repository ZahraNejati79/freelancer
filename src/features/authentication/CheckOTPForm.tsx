import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/AuthService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../ui/Loading";
import { IoArrowForwardSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";

type Props = {
  phoneNumber: string;
  onBack: Function;
  onResendOtp: (e: any) => Promise<void>;
  otpResponse: any;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
};

const CheckOTPForm: React.FC<Props> = ({
  phoneNumber,
  onBack,
  onResendOtp,
  otpResponse,
  time,
  setTime,
}) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [time]);

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
    <div className="flex flex-col">
      <button onClick={onBack}>
        <IoArrowForwardSharp className="w-6 h-6 cursor-pointer text-secondary-500" />
      </button>

      <div>
        {otpResponse && (
          <div className="flex items-center gap-2">
            <p>{`کد تایید برای شماره موبایل ${phoneNumber} ارسال گردید`}</p>
            <div className="cursor-pointer" onClick={onBack}>
              <MdEdit />
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="max-w-sm space-y-8 w-full mt-8">
        <p>کد تایید را وارد کنید</p>
        <div className="flex flex-col items-center justify-center">
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
        </div>
        <div className="mb-4">
          {time > 0 ? (
            <div className="text-secondary-500">{`${time} ثانیه تا امکان ارسال مجدد کد`}</div>
          ) : (
            <div
              className="text-secondary-500 cursor-pointer"
              onClick={onResendOtp}
            >
              ارسال مجدد کد
            </div>
          )}
        </div>
        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </form>
    </div>
  );
};
export default CheckOTPForm;
