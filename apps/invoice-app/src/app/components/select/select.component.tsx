// @ts-nocheck
import React from 'react';
import { Select as RadixSelect } from 'radix-ui';
import classNames from 'classnames';
import { Controller } from 'react-hook-form';
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
  name: string;
  control?: any; // optional React Hook Form
  value?: string | number; // controlled value
  onChange?: (val: string) => void; // controlled handler
}

const SelectItem = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef: any) => {
    return (
      <RadixSelect.Item
        className={classNames('select__item', className)}
        {...props}
        ref={forwardedRef}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      </RadixSelect.Item>
    );
  },
);

export const Select: React.FC<DropdownProps> = ({
  options,
  placeholder,
  label,
  name,
  control,
  value,
  onChange,
}) => {
  const id = htmlSafeId(name);
  const isUsingRHF = !!control;

  const [localValue, setLocalValue] = React.useState(
    value?.toString() ?? options?.[0]?.value?.toString() ?? '',
  );

  const getLabelForValue = (val: string | number | undefined) => {
    return options?.find((opt) => opt.value.toString() === val?.toString())
      ?.label;
  };

  const renderSelect = (
    selectedValue: string,
    handleChange: (val: string) => void,
  ) => (
    <div className="select__container">
      <input type="hidden" name={name} value={selectedValue} />
      <label htmlFor={id}>{label}</label>
      <RadixSelect.Root value={selectedValue} onValueChange={handleChange}>
        <RadixSelect.Trigger className="select__trigger" id={id}>
          <RadixSelect.Value placeholder={placeholder}>
            {getLabelForValue(selectedValue)}
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
                  <SelectItem
                    key={option.value}
                    value={option.value.toString()}
                  >
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

  if (isUsingRHF) {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) =>
          renderSelect(field.value?.toString(), (val) =>
            field.onChange(Number(val)),
          )
        }
      />
    );
  }

  // fallback to controlled or local state
  const selectedValue = value?.toString() ?? localValue;
  const handleChange = (val: string) => {
    if (onChange) onChange(val);
    else setLocalValue(val);
  };

  return renderSelect(selectedValue, handleChange);
};

export default Select;
