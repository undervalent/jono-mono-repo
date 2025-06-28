import * as React from 'react';
import { Checkbox as CheckboxRadix } from 'radix-ui';
import classNames from 'classnames';
import { FaCheck } from 'react-icons/fa';

import './checkbox.styles.css';
import { htmlSafeId } from '@lib/utils';

interface Props {
  label: string;
  checked: boolean;
}

export const Checkbox: React.FC<Props> = ({ label, checked }) => {
  const id = htmlSafeId();

  const classes = classNames({
    checkbox__root: true,
    checkbox__active: checked,
  });

  return (
    <div className="checkbox">
      <CheckboxRadix.Root
        className={classes}
        defaultChecked
        id={id}
        checked={checked}
      >
        <CheckboxRadix.Indicator className="checkbox__indicator">
          <FaCheck />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      <label className="checkbox__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
