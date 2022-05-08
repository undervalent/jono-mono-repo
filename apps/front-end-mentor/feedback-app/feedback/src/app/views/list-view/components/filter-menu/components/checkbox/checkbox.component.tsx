import React from "react";
import { CheckboxWrapper } from "./checkbox.styles";

import { useActiveFilters } from "./hooks";
interface IProps {
  value: string;
}

export const Checkbox: React.FC<IProps> = ({ value }) => {
  const [activeFilters, { toggleCheckbox }] = useActiveFilters();
  return (
    <CheckboxWrapper>
      <input
        type="checkbox"
        id={value}
        name={value.toLowerCase()}
        value={value}
        checked={activeFilters.includes(value.toLowerCase())}
        onChange={toggleCheckbox}
      />

      <label htmlFor={value}>{value}</label>
    </CheckboxWrapper>
  );
};
