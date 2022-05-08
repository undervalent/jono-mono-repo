import React from "react";
import { Wrapper, Error } from "./input.styles";

interface IProps {
  error?: string;
  label: string;
  placeholder?: string;
}

export const Input: React.FC<IProps> = ({ error, label, placeholder }) => {
  return (
    <Wrapper error={error}>
      <input
        id={`input-${label}`}
        placeholder={placeholder}
        className="container__input"
        name={label}
      />
      <label className="container__label" htmlFor={`input-${label}`}>
        {label}
      </label>
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};
