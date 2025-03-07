import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

type Props = {
  phoneNumber: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: any) => Promise<void>;
  isSendingOtp: boolean;
};

const SendOTPFrom: React.FC<Props> = ({
  onSubmit,
  phoneNumber,
  onChange,
  isSendingOtp,
}) => {
  return (
    <form className="max-w-sm space-y-8 w-full" onSubmit={onSubmit}>
      <TextField
        name="phoneNumber"
        value={phoneNumber}
        onChange={onChange}
        label="شماره همراه"
      />
      <div>
        {isSendingOtp ? (
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
