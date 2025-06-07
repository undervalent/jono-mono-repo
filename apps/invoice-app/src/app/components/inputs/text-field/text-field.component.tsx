import React from 'react';
import { Form } from 'radix-ui';
import classNames from 'classnames';
import { toCssSize } from '../../../lib/utils';

import './text-field.css';

interface Props {
  labelValue: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  defaultValue?: string;
  width?: number | string;
}

export const OriginalTextField: React.FC<Props> = ({
  labelValue,
  type = 'text',
  name = '',
  defaultValue = '',
  width = '',
}) => {
  const classes = classNames({
    'inv-text-field': true,
    'inv-text-field__dynamic-width': !!width,
  });
  const style = {
    '--width': toCssSize(width),
  } as React.CSSProperties;
  return (
    <Form.Field name={name} className="inv-text-field__container">
      <Form.Label>{labelValue}</Form.Label>
      <Form.Control
        className={classes}
        type={type}
        defaultValue={defaultValue}
        style={style}
      />
      {/* <Form.Message className="inv-text-field__message">message</Form.Message> */}
    </Form.Field>
  );
};

export const TextField: React.FC<Exclude<Props, 'theme'>> = ({ ...props }) => {
  return <OriginalTextField {...props} />;
};
