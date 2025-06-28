import React from 'react';
import { Form } from 'radix-ui';
import classNames from 'classnames';
import { toCssSize } from '../../../lib/utils';
import { TextInputType } from '@lib/types';
import { Invoice } from '@lib/schemas';
import { Controller, Control } from 'react-hook-form';

import './text-field.css';

type ControlledProps = {
  value?: string;
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
  error?: string;
};

type Props = CommonProps & (ControlledProps | UncontrolledProps);

export const TextField: React.FC<Props> = (props) => {
  const {
    labelValue,
    type = 'text',
    width = '100%',
    name,
    value,
    onChange,
    onBlur,
    defaultValue,
    error,
  } = props;

  const containerClasses = classNames({
    'inv-text-field__container': true,
  });
  const classes = classNames({
    'inv-text-field': true,
    'inv-text-field__dynamic-width': !!width,
    'inv-text-field__error': !!error,
  });

  const style = {
    '--width': toCssSize(width),
  } as React.CSSProperties;

  return (
    <Form.Field name={name} className={containerClasses} style={style}>
      <div className="inv-text-field__label-wrapper">
        <Form.Label htmlFor={String(name)}>{labelValue}</Form.Label>
        {error && (
          <Form.Message className="inv-text-field__error-message">
            {error}
          </Form.Message>
        )}
      </div>
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
interface ControllerTextFieldProps {
  control: Control<any>;
  item: {
    name: string;
    labelValue: string;
    type?: TextInputType;
  };
  error?: string;
  width?: number | string;
}
export function ControllerTextField({
  item,
  control,
  width,
  error,
}: ControllerTextFieldProps) {
  return (
    <Controller
      name={item.name}
      control={control}
      render={({ field }) => {
        return (
          <TextField
            {...field}
            labelValue={item.labelValue}
            type={item.type}
            width={width}
            error={error}
          />
        );
      }}
    />
  );
}
