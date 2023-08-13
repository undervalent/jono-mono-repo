import React from "react";
import classNames from "classnames";

import "../styles/deault-button.css";
import "./button.styles.css";
import plus from "../../../../assets/icon-plus.svg";

interface Props {
  type?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  icon?: boolean;
  onClick(): void;
  disabled?: boolean;
  children: React.ReactNode
}

export const Button: React.FC<Props> = ({
  type,
  size,
  children,
  icon,
  onClick,
  disabled,
}) => {
  const classes = classNames({
    "default-button": true,
    "main-button": true,
    [`main-button__${type}`]: true,
    [`main-button__${size}`]: true,
    [`main-button__icon`]: icon,
    [`main-button__disabled`]: disabled,
  });

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {icon && (
        <div className="main-button__icon-wrapper">
          <img src={plus} alt="plus icon" />
        </div>
      )}
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "medium",
  type: "primary",
  icon: false,
};
