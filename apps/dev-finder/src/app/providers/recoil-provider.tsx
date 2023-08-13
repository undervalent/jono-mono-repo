import React from 'react'
import { RecoilRoot } from 'recoil'

interface Props {
  children:React.ReactNode
}

export function RecoilProvider({children}:Props) {

  return <RecoilRoot>{children}</RecoilRoot>


}
