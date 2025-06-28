import React from 'react';
import classNames from 'classnames';
import { AccessibleIcon } from 'radix-ui';
import { toCssSize } from '../../../lib/utils';
import '../styles/deault-button.css';
import './button.styles.css';

interface Props {
  type?: 'primary' | 'secondary' | 'danger' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  icon?: any;
  children: React.ReactNode;
  iconLabel?: string;
  width?: number | string;
  disabled?: boolean;
  onClick?: any;
  intent?: string;
}

export const Button: React.FC<Props> = ({
  type = 'primary',
  size = 'medium',
  children,
  icon = null,
  iconLabel = '',
  width = '',
  disabled = false,
  ...htmlAttributes
}) => {
  const classes = classNames({
    'default-button': true,
    'main-button': true,
    [`main-button__${type}`]: true,
    [`main-button__${size}`]: !!width ? false : true,
    [`main-button__icon`]: icon,
    [`main-button__disabled`]: disabled,
  });

  return (
    <button
      className={classes}
      style={{ maxWidth: toCssSize(width) }}
      disabled={disabled}
      {...htmlAttributes}
    >
      {icon && (
        <AccessibleIcon.Root label={iconLabel ?? 'Icon'}>
          {icon}
        </AccessibleIcon.Root>
      )}
      {children}
    </button>
  );
};
