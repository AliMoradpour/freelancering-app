import type { FieldValues } from "react-hook-form";
import RadioInput from "./RadioInput";
import type { RadioInputGroupProps } from "../types/authTypes";

function RadioInputGroup<T extends FieldValues>({
  register,
  watch,
  errors,
  configs,
}: RadioInputGroupProps<T>) {
  const { name, validationSchema = {}, options } = configs;
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-x-8">
        {options.map(({ value, label }) => (
          <RadioInput<T>
            key={value}
            label={label}
            id={value}
            value={value}
            name={name}
            register={register}
            watch={watch}
            validationSchema={validationSchema}
          />
        ))}
        {errors && errors[name] && (
          <p className="text-error text-sm mt-2 flex-1">
            {(errors[name] as { message?: string })?.message}
          </p>
        )}
      </div>
    </>
  );
}

export default RadioInputGroup;
