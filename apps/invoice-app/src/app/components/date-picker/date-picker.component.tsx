import React from 'react';
import { Popover } from 'radix-ui';
import { DayPicker } from 'react-day-picker';
import { format, formatDate, isValid, parse } from 'date-fns';
import './date-picker.styles.css';
import './react-daypicker.styles.css';
import { FaRegCalendar } from 'react-icons/fa6';
const dateFormat = 'dd LLL yyyy';
interface DatePickerProps {
  title: string;
  defaultValue?: Date;
}

export function DatePicker({ title, defaultValue }: DatePickerProps) {
  const date = !!defaultValue ? new Date(defaultValue) : new Date();
  const [month, setMonth] = React.useState(date);
  const [selectedDate, setSelectedDate] = React.useState<Date>(date);
  const [inputValue, setInputValue] = React.useState(
    formatDate(date, dateFormat),
  );

  const handleDayPickerSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      setInputValue(format(date, dateFormat));
    }
  };

  return (
    <Popover.Root>
      <div className="popover">
        <label htmlFor="date-input" className="popover__label">
          {title}
        </label>
        <input
          style={{ fontSize: 'inherit' }}
          id="date-input"
          type="text"
          value={inputValue}
          placeholder="MM/dd/yyyy"
          className="popover__input"
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
              {selectedDate !== undefined
                ? selectedDate.toDateString()
                : 'Please type or pick a date'}
            </p>
            <DayPicker
              month={month}
              onMonthChange={setMonth}
              autoFocus
              mode="single"
              selected={selectedDate}
              onSelect={handleDayPickerSelect}
              footer={
                selectedDate !== undefined &&
                `Selected: ${selectedDate.toDateString()}`
              }
            />
          </div>
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
