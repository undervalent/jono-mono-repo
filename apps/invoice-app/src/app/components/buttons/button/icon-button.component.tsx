import React from 'react';
import classNames from 'classnames';
import { AccessibleIcon } from 'radix-ui';
import '../styles/deault-button.css';

interface Props {
  icon: any;
  onClick(): void;
  disabled?: boolean;
  iconLabel?: string;
  style?: React.CSSProperties;
}

export const IconButton: React.FC<Props> = ({
  icon,
  onClick,
  disabled,
  iconLabel = '',
  style = {},
}) => {
  const classes = classNames({
    'icon-button': true,
  });

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      style={{ ...style }}
    >
      <AccessibleIcon.Root label={iconLabel ?? 'Icon'}>
        {icon}
      </AccessibleIcon.Root>
    </button>
  );
};
