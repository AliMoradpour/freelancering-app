import RadioInput from "./RadioInput";

function RadioInputGroup({ register, watch, errors, configs }) {
  const { name, validationSchema = {}, options } = configs;
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-x-8">
        {options.map(({value, label}) => (
          <RadioInput
            key={value}
            label={label}
            id={value} 
            name={name}
            register={register}
            watch={watch}
            validationSchema={validationSchema}
            errors={errors}
          />
        ))}
        {errors && errors[name] && (
          <p className="text-error text-sm mt-2 flex-1">
            {errors[name]?.message}
          </p>
        )}
      </div>
    </>
  );
}

export default RadioInputGroup;
