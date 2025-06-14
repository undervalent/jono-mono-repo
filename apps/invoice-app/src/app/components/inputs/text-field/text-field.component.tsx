import React from 'react';
import { Form } from 'radix-ui';
import classNames from 'classnames';
import { toCssSize } from '../../../lib/utils';
import { TextInputType } from '@lib/types';
import { Invoice } from '@lib/schemas';
import { Controller } from 'react-hook-form';

import './text-field.css';

type ControlledProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: any;
  defaultValue?: never;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
};

type UncontrolledProps = {
  defaultValue?: string;
  value?: never;
  onChange?: never;
  name: keyof Invoice;
};

type CommonProps = {
  labelValue: string;
  type?: TextInputType;
  width?: number | string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
};

type Props = CommonProps & (ControlledProps | UncontrolledProps);

export const TextField: React.FC<Props> = (props) => {
  const {
    labelValue,
    type = 'text',
    width = '',
    name,
    value,
    onChange,
    onBlur,
    defaultValue,
  } = props;

  const classes = classNames({
    'inv-text-field': true,
    'inv-text-field__dynamic-width': !!width,
  });

  const style = {
    '--width': toCssSize(width),
  } as React.CSSProperties;

  return (
    <Form.Field name={name} className="inv-text-field__container">
      <Form.Label htmlFor={String(name)}>{labelValue}</Form.Label>
      <Form.Control asChild>
        <input
          id={String(name)}
          name={String(name)}
          type={type}
          className={classes}
          style={style}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete="off"
        />
      </Form.Control>
    </Form.Field>
  );
};

export function ControllerTextField({ item, control }: any) {
  return (
    <Controller
      name={item.name}
      control={control}
      render={({ field }) => (
        <TextField {...field} labelValue={item.labelValue} type={item.type} />
      )}
    />
  );
}
