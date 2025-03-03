import { ChangeEventHandler } from "react";

type Props = {
  label: string;
  name: string;
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const TextField: React.FC<Props> = ({ label, name, value, onChange }) => {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        className="textField__input"
      />
    </div>
  );
};

export default TextField;
