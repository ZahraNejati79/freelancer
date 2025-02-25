const SendOTPFrom: React.FC = () => {
  return (
    <form className="space-y-8">
      <div>
        <label>شماره همراه</label>
        <input className="textField__input" />
      </div>
      <button type="submit" className="btn btn--primary">
        ارسال کد تایید
      </button>
    </form>
  );
};
export default SendOTPFrom;
