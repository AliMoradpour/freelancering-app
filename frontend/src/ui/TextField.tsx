import type { FieldValues } from "react-hook-form";
import type { TextInputProps } from "../types/authTypes";

const TextField = <T extends FieldValues>({
  label,
  name,
  register,
  validationSchema,
  type = "text",
  required,
  errors,
  placeholder,
}: TextInputProps<T>) => {
  return (
    <div>
      <label htmlFor={name} className="text-secondary-700 mb-2 block">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        className="textField__input"
        id={name}
        type={type}
        {...register(name, validationSchema)}
        placeholder={placeholder}
      />
      {errors && errors[name] && (
        <span className="text-error text-sm">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default TextField;
