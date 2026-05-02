import type { ChangeEventHandler } from "react";

type Props = {
  label: string;
  value: string;
  name: string;
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
};

const RadioInput = ({ label, value, id, name, onChange, checked }: Props) => {
  return (
    <div className="flex items-center gap-x-2">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        className="w-4 h-4 accent-primary-900 cursor-pointer"
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={value} className="text-secondary-900">
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
