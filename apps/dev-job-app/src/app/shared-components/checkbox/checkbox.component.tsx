import React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import * as Styled from "./checkbox.styles";

import CheckMark from "../../../assets/desktop/icon-check.svg";
interface IProps {
  label: string;
  isSelected: boolean;
  onCheckboxChange: any;
}

export const Checkbox: React.FC<IProps> = ({
  isSelected,
  label,
  onCheckboxChange,
}) => {
  return (
    <Styled.Container isSelected={isSelected}>
      <Styled.CheckboxRoot
        isSelected={isSelected}
        checked={isSelected}
        id="checkbox"
        onCheckedChange={onCheckboxChange}
      >
        <RadixCheckbox.Indicator>
          {isSelected && <img src={CheckMark} alt="check mark" />}
        </RadixCheckbox.Indicator>
      </Styled.CheckboxRoot>
      <Styled.Label htmlFor="checkbox">{label}</Styled.Label>
    </Styled.Container>
  );
};
