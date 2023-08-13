import React from 'react'

import {ThemeProvider} from "./theme-provider"
import {RecoilProvider} from './recoil-provider'
import {ReactQueryProvider} from './react-query-provider'
interface Props {
  children: React.ReactNode
}

export function Providers({children}:Props) {


   return (
     <RecoilProvider>
       <ReactQueryProvider>
        <ThemeProvider>
         {children}
        </ThemeProvider>
       </ReactQueryProvider>
     </RecoilProvider>
  );
}
