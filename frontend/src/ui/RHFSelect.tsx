import type { FieldValues } from "react-hook-form";
import type { SelectInputProps } from "../types/authTypes";

export default function RHFSelect<T extends FieldValues>({
  label,
  name,
  register,
  options,
  required,
}: SelectInputProps<T>) {
  return (
    <div>
      <label htmlFor={String(name)} className="mb-2 block text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select
        {...register(name)}
        id={String(name)}
        className="textField__input"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}