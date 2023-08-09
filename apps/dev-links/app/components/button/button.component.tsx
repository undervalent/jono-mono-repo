"use client"
import React from 'react'
import * as Styled from './styles'
import { ButtonProps } from './types';

export const Button = ({children,...rest}:ButtonProps) => {
  return (<>
    <Styled.Button {...rest}>{children}</Styled.Button>
 </> )
}

export default Button
