import React from "react";
import { Wrapper, Error } from "./text-area.styles";

interface IProps {
  error?: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  max?: number;
}

export const Textarea: React.FC<IProps> = ({
  error,
  label,
  placeholder,
  value,
  onChange,
  max,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    if (max && value.length >= max) {
      return;
    }
    onChange(e.target.value);
  };

  return (
    <Wrapper error={error}>
      <textarea
        id={`input-${label}`}
        placeholder={placeholder}
        className="container__input"
        name={label}
        value={value}
        onChange={handleChange}
      />
      <label className="container__label" htmlFor={`input-${label}`}>
        {label}
      </label>
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};
