import { useState, type KeyboardEvent } from "react";

type Props = {
  value: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
};

function TagsInput({ value, onChange, placeholder = "تگ جدید..." }: Props) {
  const [input, setInput] = useState("");

  const addTag = () => {
    const trimmed = input.trim();
    if (trimmed && !value.includes(trimmed)) {
      onChange([...value, trimmed]);
    }
    setInput("");
  };

  const removeTag = (index: number) => {
    onChange(value.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    } else if (e.key === "Backspace" && input === "") {
      removeTag(value.length - 1);
    }
  };

  return (
    <div className="textField__input flex flex-wrap gap-2 cursor-text min-h-[42px]">
      {value.map((tag, index) => (
        <span
          key={index}
          className="flex items-center gap-1 bg-primary-100 text-primary-900 text-sm px-2 py-0.5 rounded"
        >
          {tag}
          <button
            type="button"
            onClick={() => removeTag(index)}
            className="text-primary-900 hover:text-error leading-none"
          >
            ×
          </button>
        </span>
      ))}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={addTag}
        placeholder={value.length === 0 ? placeholder : ""}
        className="outline-none bg-transparent flex-1 min-w-[120px] text-sm"
      />
    </div>
  );
}

export default TagsInput;