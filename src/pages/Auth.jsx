import CheckOTPForm from "../features/authentication/CheckOTPForm";
import SendOTPForm from "../features/authentication/SendOTPForm";

const Auth = () => {
  return (
    <div className="flex justify-center pt-10">
      <div className="w-full md:max-w-sm ">
        <SendOTPForm />
        <CheckOTPForm />
      </div>
    </div>
  );
};

export default Auth;
