import CheckOTPForm from "../features/authentication/CheckOTPForm";
import SendOTPFrom from "../features/authentication/SendOTPForm";

const Auth: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center pt-10">
      <SendOTPFrom />
      {/* <CheckOTPForm /> */}
    </div>
  );
};
export default Auth;
