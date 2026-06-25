import { Field, Label, Switch } from "@headlessui/react";

interface ToggleProps {
  label: string;
  enabled: boolean;
  onChange: () => void;
}

function Toggle({ label, enabled, onChange }: ToggleProps) {
  return (
    <Field>
      <div className="flex items-center gap-x-2">
        <Label>{label}</Label>
        <Switch
          checked={enabled}
          onChange={onChange}
          className={`${enabled ? "bg-primary-900" : "bg-secondary-200"} relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
        >
          <span
            className={`${enabled ? "-trnslate-x-6" : "-translate-x-1"} size-4 rounded-full bg-secondary-0 transition`}
          />
        </Switch>
      </div>
    </Field>
  );
}

export default Toggle;
