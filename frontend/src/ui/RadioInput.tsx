import type { FieldValues } from "react-hook-form";
import type { RadioInputProps } from "../types/authTypes";

const RadioInput = <T extends FieldValues>({
  label,
  value,
  id,
  name,
  register,
  validationSchema,
  watch,
}: RadioInputProps<T>) => {
  return (
    <div className="flex items-center gap-x-2">
      <input
        type="radio"
        id={id}
        value={value}
        className="w-4 h-4 accent-primary-900 cursor-pointer"
        {...register(name, validationSchema)}
        checked={watch(name) === value}
      />
      <label htmlFor={id} className="text-secondary-900">
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
