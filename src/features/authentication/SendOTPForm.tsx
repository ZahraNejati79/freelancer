import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/AuthService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  phoneNumber: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SendOTPFrom: React.FC<Props> = ({ setStep, phoneNumber, onChange }) => {
  const { isPending, mutateAsync } = useMutation({
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

  return (
    <form className="max-w-sm space-y-8 w-full" onSubmit={sendOtpHandler}>
      <TextField
        name="phoneNumber"
        value={phoneNumber}
        onChange={onChange}
        label="شماره همراه"
      />
      <div>
        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            ارسال کد تایید
          </button>
        )}
      </div>
    </form>
  );
};
export default SendOTPFrom;
