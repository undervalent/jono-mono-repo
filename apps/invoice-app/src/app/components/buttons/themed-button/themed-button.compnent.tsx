import React from "react";
import classNames from "classnames";
import { useRecoilValue } from "recoil";
import "../styles/deault-button.css";
import "./themed-button.styles.css";

import { ThemeOptions } from "../../../lib/types";
import { themeState } from "../../../state";
interface Props {
  theme: ThemeOptions;
  type: "primary" | "secondary";
}

export const OriginalButton: React.FC<Props> = ({ theme, type, children }) => {
  const classes = classNames({
    "default-button": true,
    "themed-button": true,
    [`themed-button__${type}-${theme}`]: true,
  });
  return <button className={classes}>{children}</button>;
};

export const ThemedButton: React.FC<Exclude<Props, "theme">> = ({
  type,
  children,
}) => {
  const themeValue = useRecoilValue(themeState);
  return (
    <OriginalButton theme={themeValue} type={type}>
      {children}
    </OriginalButton>
  );
};

export default ThemedButton;
