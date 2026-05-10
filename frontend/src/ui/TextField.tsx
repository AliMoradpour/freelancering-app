import type {
  UseFormRegister,
  FieldValues,
  Path,
  RegisterOptions,
  FieldErrors,
} from "react-hook-form";

type Props<T extends FieldValues> = {
  label: string;
  name: Path<T>;                    
  register: UseFormRegister<T>;
  validationSchema?: RegisterOptions<T, Path<T>>;
  type?: string;
  required?: boolean;
  errors?: FieldErrors<T>;
};

const TextField = <T extends FieldValues>({
  label,
  name,
  register,
  validationSchema,
  type = "text",
  required,
  errors,
}: Props<T>) => {
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
      />
      {errors && errors[name] && (
        <span className="text-danger">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default TextField;