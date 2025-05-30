import React from 'react';
import { Form } from 'radix-ui';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { getTheme } from '../../../state/ui';

import './text-field.css';

interface Props {
  labelValue: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  defaultValue?: string;
}

export const OriginalTextField: React.FC<Props> = ({
  labelValue,
  type = 'text',
  name = '',
  defaultValue = '',
}) => {
  const theme = useSelector(getTheme);

  const classes = classNames({
    'inv-text-field': true,
    [`inv-text-field__${theme}`]: true,
  });
  return (
    <Form.Field name={name} className="inv-text-field__container">
      <Form.Label>{labelValue}</Form.Label>
      <Form.Control
        className={classes}
        type={type}
        defaultValue={defaultValue}
      />
      <Form.Message className="inv-text-field__message">message</Form.Message>
    </Form.Field>
  );
};

export const TextField: React.FC<Exclude<Props, 'theme'>> = ({ ...props }) => {
  return <OriginalTextField {...props} />;
};
