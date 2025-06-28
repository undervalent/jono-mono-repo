import React from 'react';
import classNames from 'classnames';
import styles from './button.module.css';

type IProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'light' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
};

export function Button({
  children,
  variant = 'default',
  size = 'lg',
  ...rest
}: IProps) {
  const classes = classNames({
    [styles.light]: variant === 'light',
    [styles.subtle]: variant === 'subtle',
    [styles.default]: variant === 'default',
    [styles.sm]: size === 'sm',
    [styles.md]: size === 'md',
    [styles.lg]: size === 'lg',
  });
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
