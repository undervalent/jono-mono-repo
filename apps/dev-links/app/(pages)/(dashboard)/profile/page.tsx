"use client"

import React from 'react'
import { Header } from '../../../components';
import { AppProvider } from '../../../lib/styles/theme-provider';
interface IProps  {
    children: React.ReactNode
 }

export default function Page({children}: IProps) {
  return (
    <AppProvider>
      <Header />
      {children}
    </AppProvider>
  )
}
