// @ts-nocheck
import React from 'react';
import { Select as RadixSelect } from 'radix-ui';
import classNames from 'classnames';
import { htmlSafeId } from '../../lib/utils';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

import './select.css';

interface Option {
  value: string | number;
  label: string;
}

interface DropdownProps {
  options?: Option[];
  placeholder?: string;
  label: string;
  defaultValue?: string | undefined;
  name: string;
}

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <RadixSelect.Item
        className={classNames('select__item', className)}
        {...props}
        ref={forwardedRef}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        {/* <Select.ItemIndicator className="select__item-indicator"></Select.ItemIndicator> */}
      </RadixSelect.Item>
    );
  },
);
export const Select: React.FC<DropdownProps> = ({
  options,
  placeholder,
  label,
  defaultValue,
  name,
}) => {
  const [selected, setSelected] = React.useState(
    defaultValue || options?.[0].value,
  );
  const id = htmlSafeId(name);

  const selectedItemText = options?.find(
    (option) => option.value === parseInt(selected, 10),
  )?.label;

  return (
    <div className="select__container">
      <input type="hidden" name={name} value={selected} />
      <label htmlFor={id}>{label}</label>
      <RadixSelect.Root defaultValue={defaultValue} onValueChange={setSelected}>
        <RadixSelect.Trigger
          className="select__trigger"
          id={id}
          aria-label={label}
        >
          <RadixSelect.Value
            placeholder={placeholder}
            className="select__item-value"
          >
            {selectedItemText}
          </RadixSelect.Value>
          <RadixSelect.Icon className="select__icon">
            <FaAngleDown size="1.5rem" />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <div className="select__portal">
            <RadixSelect.Content className="select__content">
              <RadixSelect.ScrollUpButton className="select__scroll-button">
                <FaAngleUp size="1.5rem" />
              </RadixSelect.ScrollUpButton>
              <RadixSelect.Viewport className="select__viewport">
                {options?.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </RadixSelect.Viewport>
              <RadixSelect.ScrollDownButton className="select__scroll-button">
                <FaAngleDown size="1.5rem" />
              </RadixSelect.ScrollDownButton>
            </RadixSelect.Content>
          </div>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </div>
  );
};

export default Select;
