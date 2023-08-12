import React from "react";
import "./label.css";

interface LabelProps {
  labelValue: string;
}

export const Label: React.FC<LabelProps> = ({ labelValue }) => {
  return (
    <label htmlFor={labelValue} className="app-label">
      {labelValue}
    </label>
  );
};
