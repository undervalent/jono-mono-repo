import React from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import './date-picker.styles.css';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

interface DatePickerProps {
  title: string;
  defaultValue?: Date;
}
function useDatePicker({ defaultValue }: { defaultValue?: Date }): [
  {
    selectedDate: Date;
    startDay: number;
    showCalendar: boolean;
    daysInMonth: number;
    calendarRef: any;
    inputRef: any;
  },
  {
    handleDateClick: (day: number) => void;
    prevMonth: (e: any) => void;
    nextMonth: (e: any) => void;
    setShowCalendar: (show: boolean) => void;
  },
] {
  const [selectedDate, setSelectedDate] = React.useState(
    defaultValue || new Date(),
  );
  const [showCalendar, setShowCalendar] = React.useState(false);
  const calendarRef = React.useRef(null);
  const inputRef = React.useRef(null);

  const startOfMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1,
  );
  const startDay = startOfMonth.getDay();
  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0,
  ).getDate();

  const handleDateClick = (day) => {
    const newDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      day,
    );
    setSelectedDate(newDate);
    setShowCalendar(false);
    inputRef.current?.focus();
  };

  const prevMonth = (e: any) => {
    e.preventDefault();
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1),
    );
  };

  const nextMonth = (e: any) => {
    e.preventDefault();
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1),
    );
  };

  React.useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        calendarRef?.current &&
        !calendarRef?.current?.contains(event.target) &&
        !inputRef?.current?.contains(event.target)
      ) {
        setShowCalendar(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return [
    {
      selectedDate,
      startDay,
      showCalendar,
      daysInMonth,
      calendarRef,
      inputRef,
    },
    {
      handleDateClick,
      prevMonth,
      nextMonth,
      setShowCalendar,
    },
  ];
}
export function DatePicker({ title, defaultValue }: DatePickerProps) {
  console.log('DATE --> ', { title, defaultValue });
  const [
    {
      startDay,
      showCalendar,
      daysInMonth,
      calendarRef,
      inputRef,
      selectedDate,
    },
    { handleDateClick, prevMonth, nextMonth, setShowCalendar },
  ] = useDatePicker({ defaultValue });
  return (
    <div className="datepicker">
      <label htmlFor="datepicker-input">{title}</label>
      <div
        className="input-wrapper"
        id="datepicker-input"
        role="combobox"
        aria-haspopup="dialog"
        aria-expanded={showCalendar}
        aria-controls="calendar-dialog"
        tabIndex={0}
        onClick={() => setShowCalendar(!showCalendar)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setShowCalendar(!showCalendar);
          }
        }}
        ref={inputRef}
      >
        <span>
          {selectedDate.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}
        </span>
        <span className="calendar-icon" aria-hidden="true">
          📅
        </span>
      </div>
      {showCalendar && (
        <div
          className="calendar"
          id="calendar-dialog"
          role="dialog"
          aria-label="Calendar dialog"
          ref={calendarRef}
        >
          <div className="calendar-header">
            <button onClick={prevMonth} aria-label="Previous month">
              &lt;
            </button>
            <span>
              {months[selectedDate.getMonth()]} {selectedDate.getFullYear()}
            </span>
            <button onClick={nextMonth} aria-label="Next month">
              &gt;
            </button>
          </div>
          <div className="calendar-grid" role="grid">
            {[...Array(startDay)].map((_, i) => (
              <div key={'empty-' + i} />
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
              <div
                key={day}
                role="gridcell"
                tabIndex={0}
                aria-selected={day === selectedDate.getDate()}
                className={`day ${day === selectedDate.getDate() ? 'selected' : ''}`}
                onClick={(event) => {
                  event.preventDefault();
                  handleDateClick(day);
                }}
                onKeyDown={(e) => {
                  e.preventDefault();
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleDateClick(day);
                  }
                }}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
