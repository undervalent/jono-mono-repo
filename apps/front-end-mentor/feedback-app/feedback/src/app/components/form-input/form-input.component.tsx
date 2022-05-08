import React from "react";
import {
  Wrapper,
  Label,
  Span,
  Input,
  TextArea,
  Error,
} from "./form-input.styles";

interface IProps {
  label: string;
  description?: string;
  id: string;
  error?: string;
  inputType: "textarea" | "textfield";
  value: string;
  onChange(val: string): void;
}

export const FormInput: React.FC<IProps> = ({
  label,
  description,
  id,
  inputType,
  error,
  value,
  onChange,
}) => {
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => onChange(e.target.value);
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      {description && <Span>{description}</Span>}
      {inputType === "textfield" && (
        <Input id={id} error={error} value={value} onChange={handleChange} />
      )}
      {inputType === "textarea" && (
        <TextArea id={id} error={error} value={value} onChange={handleChange} />
      )}
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};
