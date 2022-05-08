import React from "react";
import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";
import { FaCheck } from "react-icons/fa";
import { Wrapper } from "./form-dropdown.styles";
import { Label, Span } from "../../form-input";

interface IDropDownValues {
  label: string;
  value: string;
}

interface IProps {
  label?: string;
  description?: string;
  id: string;
  options: IDropDownValues[];
  selectedValue: IDropDownValues;
  setSelected(value: IDropDownValues): void;
}

export const FormDropdown: React.FC<IProps> = (props) => {
  const { label, description, id, options, selectedValue, setSelected } = props;

  const selectedLabel = selectedValue ? selectedValue?.label : options[0].label;
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Span>{description}</Span>
      <Menu id={id}>
        <MenuButton>
          <span className="dropdown-span">{selectedLabel}</span>
          <span aria-hidden>▾</span>
        </MenuButton>
        <MenuList>
          {options.map((el) => (
            <MenuItem key={el.label} onSelect={() => setSelected(el)}>
              {el.label}{" "}
              {el.label === selectedLabel && (
                <FaCheck color="rgba(173, 31, 234, 1)" />
              )}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Wrapper>
  );
};
