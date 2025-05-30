import React from 'react';
import { Form } from 'radix-ui';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { getTheme } from '../../../state/ui';

import './text-field.css';

import { Label } from '../label';

function htmlSafeId(label: string): string {
  let base = label
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '');

  if (/^[^a-z]/.test(base)) base = `id-${base}`;

  const rand = Math.random().toString(36).slice(2, 8); // 6-char random suffix
  return `${base}-${rand}`;
}

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
}) => {
  const theme = useSelector(getTheme);
  const id = htmlSafeId(labelValue);

  const classes = classNames({
    'inv-text-field': true,
    [`inv-text-field__${theme}`]: true,
  });
  return (
    <Form.Field name={name}>
      <Form.Label>{labelValue}</Form.Label>
      <input className={classes} type={type} id={id} />
    </Form.Field>
  );
};

export const TextField: React.FC<Exclude<Props, 'theme'>> = ({ ...props }) => {
  return <OriginalTextField {...props} />;
};
