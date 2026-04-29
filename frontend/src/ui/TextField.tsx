import { type ChangeEventHandler } from "react";

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const TextField = ({ label, name, value, onChange }: Props) => {
  return (
    <div>
      <label htmlFor={name} className="text-secondary-900 mb-1">
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="textField__input"
        type="text"
      />
    </div>
  );
};

export default TextField;
