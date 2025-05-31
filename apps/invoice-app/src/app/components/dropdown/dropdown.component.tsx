import React from 'react';
import { Select } from 'radix-ui';
import './dropdown.css';
import classNames from 'classnames';
import { htmlSafeId } from '../../lib/utils';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classNames('select__item', className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        {/* <Select.ItemIndicator className="select__item-indicator"></Select.ItemIndicator> */}
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
  placeholder?: string;
  label: string;
  defaultValue?: string | undefined;
  name: string;
}
export const Dropdown: React.FC<DropdownProps> = ({
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
      <Select.Root defaultValue={defaultValue} onValueChange={setSelected}>
        <Select.Trigger className="select__trigger" id={id} aria-label={label}>
          <Select.Value
            placeholder={placeholder}
            className="select__item-value"
          >
            {selectedItemText}
          </Select.Value>
          <Select.Icon className="select__icon">
            <FaAngleDown size="1.5rem" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <div className="select__portal">
            <Select.Content className="select__content">
              <Select.ScrollUpButton className="select__scroll-button">
                <FaAngleUp size="1.5rem" />
              </Select.ScrollUpButton>
              <Select.Viewport className="select__viewport">
                {options?.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select.Viewport>
              <Select.ScrollDownButton className="select__scroll-button">
                <FaAngleDown size="1.5rem" />
              </Select.ScrollDownButton>
            </Select.Content>
          </div>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export default Dropdown;
