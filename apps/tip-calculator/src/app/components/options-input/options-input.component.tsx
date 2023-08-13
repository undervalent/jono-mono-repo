import React from "react";
import "./options-input.css";
interface Props {
  label: string;
  icon?: React.ReactNode;
  value: number | string | null;
  onChange(val: number): void;
  error?: string | null;
}

/**
 * It renders an input field with a label.
 * @param undefined - the value of the input
 * @returns The value of the input.
 */
export const OptionsInput: React.FC<Props> = ({ label, onChange, value, icon, error }) => {
  const val = value || "";
  const handleInput = (e: any) => onChange(Math.abs(e.target.value));
  return (
    <div className="options-input">
        <label htmlFor={label} className="options-input__label">
        {label} <span className="options-input__text-error">{error}</span>
        </label>
      {icon}
      <input
        className={`options-input__text-input ${error ? 'options-input__text-input-error':''}`}
        type="number"
        id={label}
        onChange={handleInput}
        value={val}
        placeholder="0"
      />
    </div>
  );
};
