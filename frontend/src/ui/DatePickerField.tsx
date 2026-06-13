import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller } from "react-hook-form";
import type { Control, FieldValues, Path } from "react-hook-form";

type DatePickerFieldProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  control: Control<T>;
  required?: boolean;
};

function DatePickerField<T extends FieldValues>({
  label,
  name,
  control,
  required,
}: DatePickerFieldProps<T>) {
  return (
    <div>
      <span className="mb-2 block text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </span>
      <Controller
        name={name}
        control={control}
        rules={{ required: required ? "ددلاین ضروری است." : false }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div>
            <ReactDatePicker
              selected={value ? new Date(value) : null}
              onChange={(date) => onChange(date)}
              dateFormat="yyyy/MM/dd"
              className="textField__input"
              wrapperClassName="w-full"
              minDate={new Date()}
            />
            {error && (
              <span className="text-error text-sm">{error.message}</span>
            )}
          </div>
        )}
      />
    </div>
  );
}

export default DatePickerField;