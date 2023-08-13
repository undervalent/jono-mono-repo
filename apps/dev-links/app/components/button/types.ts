import * as React from 'react'

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode
  secondary?: boolean;
  $isFullWidth?: boolean;
}
