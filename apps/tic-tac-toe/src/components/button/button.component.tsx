import React from 'react'
import clsx from 'clsx'
import styles from './button.module.css'


type IProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'light' | "subtle";
  size?:  'sm' | 'md' | 'lg'  ;
  children: React.ReactNode;
};

export function Button({children,variant="default",size="lg",...rest}:IProps) {
  return (
    <button className={clsx(styles.button, {
      [styles.light]: variant === 'light',
      [styles.subtle]: variant === 'subtle',
      [styles.default]: variant === 'default',
      [styles.sm]: size === 'sm',
      [styles.md]: size === 'md',
      [styles.lg]: size === 'lg',
    })}
    {...rest}
    >
      {children}
    </button>
  )
}
