const TextField = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label className="mb-1 block" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        value={value}
        onChange={onChange}
        className="textField__input"
        type="text"
        autoComplete="off"
      />
    </div>
  );
};

export default TextField;
