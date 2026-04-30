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
      <label htmlFor={name} className="text-secondary-900">
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="textField__input mt-3"
        type="text"
      />
    </div>
  );
};

export default TextField;
