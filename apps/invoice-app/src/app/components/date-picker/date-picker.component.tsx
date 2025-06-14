import React from 'react';
import { Popover } from 'radix-ui';
import { DayPicker } from 'react-day-picker';
import { format, formatDate, isValid, parse } from 'date-fns';
import './date-picker.styles.css';
import './react-daypicker.styles.css';
import { FaRegCalendar } from 'react-icons/fa6';
import { Controller } from 'react-hook-form';
const dateFormat = 'dd LLL yyyy';

interface DatePickerProps {
  title: string;
  name: string;
  control: any;
}

export function DatePicker({ title, name, control }: DatePickerProps) {
  const today = new Date();
  const [month, setMonth] = React.useState(today);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ref } }) => {
        const parsedDate = value ? new Date(value) : today;
        const isValidDate = isValid(parsedDate);
        const inputValue = isValidDate ? format(parsedDate, dateFormat) : '';

        return (
          <Popover.Root>
            <div className="popover">
              <label htmlFor="date-input" className="popover__label">
                {title}
              </label>
              <input
                id="date-input"
                type="text"
                className="popover__input"
                value={inputValue.toString()}
                onChange={(e) => {
                  const parsed = parse(e.target.value, dateFormat, new Date());
                  if (!isNaN(parsed.getTime())) {
                    onChange(parsed.toISOString());
                  } else {
                    onChange(''); // or keep previous?
                  }
                }}
                ref={ref}
              />
              <Popover.Trigger asChild>
                <button
                  className="popover__button"
                  aria-label="Open calendar to choose booking date"
                >
                  <FaRegCalendar color="#7E88C3" />
                </button>
              </Popover.Trigger>
            </div>
            <Popover.Portal>
              <Popover.Content
                className="popover__content"
                align="center"
                alignOffset={-100}
              >
                <div>
                  <p
                    aria-live="assertive"
                    aria-atomic="true"
                    className="visually-hidden"
                  >
                    {value
                      ? new Date(value).toDateString()
                      : 'Please type or pick a date'}
                  </p>
                  <DayPicker
                    mode="single"
                    month={month}
                    onMonthChange={setMonth}
                    selected={value ? new Date(value) : undefined}
                    onSelect={(d) => d && onChange(d.toISOString())}
                    footer={
                      value
                        ? `Selected: ${new Date(value).toDateString()}`
                        : undefined
                    }
                  />
                </div>
                <Popover.Arrow className="PopoverArrow" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        );
      }}
    />
  );
}
