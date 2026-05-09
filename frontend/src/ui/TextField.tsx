type Props = {
  label: string;
  name: string;
  validationSchema?: any;
  register: (name: string) => any;
  type?: string;
  required: boolean;
  errors?: Record<string, { message: string }>;
};

const TextField = ({
  label,
  name,
  register,
  validationSchema,
  type = "text",
  required,
  errors,
}: Props) => {
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
        <span className="text-danger">{errors[name]?.message}</span>
      )}
    </div>
  );
};

export default TextField;
