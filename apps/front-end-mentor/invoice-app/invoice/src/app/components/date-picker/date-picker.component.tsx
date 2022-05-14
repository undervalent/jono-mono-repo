import React from "react";
import classNames from "classnames";
import DPicker from "react-datepicker";

import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";

import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.styles.css";

import { ThemeOptions } from "../../lib/types";

interface IDatePickerProps {
  theme: ThemeOptions;
}

export const DatePicker: React.FC<IDatePickerProps> = ({ theme }) => {
  const [date, setDate] = React.useState(new Date());

  const classes = classNames({
    [`date-picker__${theme}`]: true,
  });

  const handleCalendarClose = () => {};
  const handleCalendarOpen = () => {};
  return (
    <div className={classes}>
      <DPicker
        selected={date}
        onChange={(newDate: Date) => setDate(newDate)}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
      />
    </div>
  );
};
