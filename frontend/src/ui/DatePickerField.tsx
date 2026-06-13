import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import type { DateObject } from "react-multi-date-picker";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Controller } from "react-hook-form";

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
          <>
            <DatePicker
              containerClassName="w-full"
              inputClass="textField__input"
              calendarPosition="bottom-center"
              value={value as DateObject | null}
              onChange={(date) => onChange(date)}
              format="YYYY/MM/DD"
              calendar={persian}
              locale={persian_fa}
            />
            {error && (
              <span className="text-error text-sm">{error.message}</span>
            )}
          </>
        )}
      />
    </div>
  );
}

export default DatePickerField;