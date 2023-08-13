import React from "react";
import classNames from "classnames";
import { BiChevronDown } from "react-icons/bi";
import { useRecoilValue } from "recoil";
import { Label } from "../inputs/label";
import {
  // Listbox,
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from "@reach/listbox";
import "@reach/listbox/styles.css";

import "./listbox.styles.css";

import { ThemeOptions } from "../../lib/types";
import { themeState } from "../../state";

interface DropdownOptions {
  value: string;
  displayName: string;
}

interface IDropdownProps {
  theme: ThemeOptions;
  options: DropdownOptions[];
  selectedValue?: string;
  returnValue(value: string): void;
}

interface IDropdownOutProps {
  options: DropdownOptions[];
  selectedValue?: string;
  returnValue(value: string): void;
  labelValue: string;
}

export const OriginaDropdown: React.FC<IDropdownProps> = ({
  theme,
  options,
  returnValue,
  selectedValue,
}) => {
  const [value, setValue] = React.useState(selectedValue || options[0].value);

  const itemClasses = classNames({
    [`dropdown-item__${theme}`]: true,
  });

  const menuButtonClasses = classNames({
    [`dropdown-menu-button__${theme}`]: true,
  });

  const popOverClasses = classNames({
    [`popover__${theme}`]: true,
  });

  const optionList = options.map((option) => (
    <ListboxOption
      className={itemClasses}
      key={option.value}
      value={option.value}
    >
      {option.displayName}
    </ListboxOption>
  ));

  const handleChange = (value: string) => {
    setValue(value);
    returnValue(value);
  };

  return (
    <ListboxInput defaultValue={value} value={value} onChange={handleChange}>
      <ListboxButton
        className={menuButtonClasses}
        arrow={
          <span>
            <BiChevronDown size="24px" color="#7C5DFA" />
          </span>
        }
      />
      <ListboxPopover className={popOverClasses}>
        <ListboxList>{optionList}</ListboxList>
      </ListboxPopover>
    </ListboxInput>
  );
};

export const Listbox: React.FC<IDropdownOutProps> = ({
  options,
  selectedValue,
  returnValue,
  labelValue,
}) => {
  const themeValue = useRecoilValue(themeState);
  return (
    <>
      <Label labelValue={labelValue} />
      <OriginaDropdown
        options={options}
        returnValue={returnValue}
        theme={themeValue}
        selectedValue={selectedValue}
      />
    </>
  );
};
