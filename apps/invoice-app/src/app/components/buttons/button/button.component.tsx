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
  onClick(): void;
  disabled?: boolean;
  children: React.ReactNode;
  iconLabel?: string;
  width?: number | string;
}

export const Button: React.FC<Props> = ({
  type = 'primary',
  size = 'medium',
  children,
  icon = null,
  onClick,
  disabled,
  iconLabel = '',
  width = '',
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
      onClick={onClick}
      disabled={disabled}
      style={{ maxWidth: toCssSize(width) }}
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
