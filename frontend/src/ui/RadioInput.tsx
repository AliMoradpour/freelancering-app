type Props = {
  label: string;
  value: string;
  name: string;
};

const RadioInput = ({ label, value, name }: Props) => {
  return (
    <div className="flex flex-row-reverse items-center gap-x-2">
      <label htmlFor={value}>{label}</label>
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        className="w-4 h-4 accent-primary-900"
      />
    </div>
  );
};

export default RadioInput;
