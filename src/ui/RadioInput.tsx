type Props = {
  label: string;
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
const RadioInput: React.FC<Props> = ({
  label,
  id,
  name,
  value,
  onChange,
  checked,
}) => {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        className="cursor-pointer w-4 h-4 accent-primary"
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
export default RadioInput;
