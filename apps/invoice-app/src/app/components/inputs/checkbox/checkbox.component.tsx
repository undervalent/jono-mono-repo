import React from "react";
import { Wrapper } from "./checkbox.styles";

interface Props {
  label: string;
  value: string;
  checked: boolean;
}

export const Checkbox: React.FC<Props> = ({ label }) => {
  return (
    <Wrapper>
      <input type="checkbox" className="label__input" />
      <div className="label__square">
        <div className="label__checkbox label__square--selected"></div>
      </div>
      <label className="label">{label}</label>
    </Wrapper>
  );
};
