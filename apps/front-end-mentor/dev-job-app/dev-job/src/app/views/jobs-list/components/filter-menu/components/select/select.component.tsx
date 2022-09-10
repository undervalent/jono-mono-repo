import React from "react";
import { useSelector } from "react-redux";
import ReactSelect from "react-select";
import { ISelectOption } from "@devjobs/types";
import { getThemeState } from "../../../../../../state/features/theme";

interface ISelectProps {
  locations: ISelectOption[];
  handleLocation(option: any): void;
}

const hover = (isLight: boolean) => {
  const backgroundColor = isLight ? "var(--grey-alpha)" : "var(--grey-bravo)";
  const color = isLight ? "var(--light-alpha)" : "var(--light-bravo)";

  return {
    backgroundColor,
    color,
  };
};

const selected = (isSelected: boolean, isLight: boolean) => {
  const outputColor = isLight ? "var(--light-alpha)" : "var(--dark-bravo)";
  return isSelected ? "var(--primary-alpha)" : outputColor;
};

const generateStyles = (theme: "light" | "dark") => {
  const isLight = theme === "light";
  const background = isLight ? "var(--light-alpha)" : "var(--dark-alpha)";
  const color = isLight ? "var(--input-light)" : "var(--input-dark)";

  return {
    menu: (provided: any) => {
      return {
        ...provided,
        background,
        color,
      };
    },
    valueContainer: (provided: any) => {
      return {
        ...provided,
        background,
        color,
      };
    },
    placeholder: (provided: any, state: any) => {
      return {
        ...provided,
        color,
      };
    },
    singleValue: (provided: any, state: any) => {
      return {
        ...provided,
        color,
      };
    },
    control: (provided: any, state: any) => {
      return {
        ...provided,
        border: "none",
        background,
        color,
      };
    },
    option: (provided: any, state: any) => {
      return {
        ...provided,
        ":hover": { ...hover(isLight) },
        backgroundColor: selected(state.isSelected, isLight),
      };
    },
  };
};

export const Select: React.FC<ISelectProps> = ({
  locations,
  handleLocation,
}) => {
  const theme = useSelector(getThemeState);

  return (
    <ReactSelect
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      styles={generateStyles(theme)}
      isClearable
      options={locations}
      onChange={handleLocation}
      placeholder="Filter by location..."
    />
  );
};
