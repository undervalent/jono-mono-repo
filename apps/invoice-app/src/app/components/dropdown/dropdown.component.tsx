import React from 'react';
import { Select } from 'radix-ui';
import './dropdown.css';
import classNames from 'classnames';

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classNames('select__item', className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="select__item-indicator">
          CHECK ICON
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);
interface Option {
  value: string | number;
  label: string;
}
interface DropdownProps {
  options?: Option[];
}
export const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  return (
    <Select.Root>
      <Select.Trigger className="select__trigger" aria-label="Food">
        <Select.Value placeholder="Select a fruit…" />
        <Select.Icon className="select__icon">DOWN</Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="select__content">
          <Select.ScrollUpButton className="select__scroll-button">
            UP
          </Select.ScrollUpButton>
          <Select.Viewport className="select__viewport">
            {options?.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="select__scroll-button">
            DOWN ICON
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default Dropdown;
