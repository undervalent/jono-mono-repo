import React from 'react';
import classNames from 'classnames';
import DPicker from 'react-datepicker';
import { useSelector } from 'react-redux';
import { getTheme } from '../../state/ui';

import 'react-datepicker/dist/react-datepicker.css';
import './date-picker.styles.css';

export const DatePicker: React.FC = () => {
  const theme = useSelector(getTheme);
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
