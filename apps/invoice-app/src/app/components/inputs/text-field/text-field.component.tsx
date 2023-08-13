import React from "react";
import classNames from "classnames";
import { useRecoilValue } from "recoil";

import { ThemeOptions } from "../../../lib/types";
import { themeState } from "../../../state";

import "./text-field.css";

import { Label } from "../label";

interface Props {
  labelValue: string;
  theme: ThemeOptions;
}

export const OriginalTextField: React.FC<Props> = ({ labelValue, theme }) => {
  const classes = classNames({
    "inv-text-field": true,
    [`inv-text-field__${theme}`]: true,
  });
  return (
    <>
      <Label labelValue={labelValue} />
      <input
        className={classes}
        type="text"
        id={labelValue}
        name={labelValue}
      />
    </>
  );
};

export const TextField: React.FC<Exclude<Props, "theme">> = ({
  labelValue,
}) => {
  const theme = useRecoilValue(themeState);
  return <OriginalTextField labelValue={labelValue} theme={theme} />;
};
