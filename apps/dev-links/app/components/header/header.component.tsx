"use client"
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import {LiaLinkSolid} from 'react-icons/lia'
import Image from "next/image"
import LogoLarge from "../../assets/images/logo-devlinks-large.svg"
import Link from "next/link"
import { Button } from "../button";
import { useTheme } from 'styled-components';

import * as Styled from './styles'


export function Header() {
  const theme = useTheme();

  return (
    <Styled.Header>

          <Link href="/">
            <Image src={LogoLarge} alt="dev links logo" />
          </Link>
<Styled.NavigationContainer>
        <Styled.NavigationLink href="links">
          <LiaLinkSolid size={theme.spacing.size5} />
      Links
      </Styled.NavigationLink>
          <Styled.NavigationLink href="profile">

          <CgProfile size={theme.spacing.size5}/>
          Profile Details
        </Styled.NavigationLink></Styled.NavigationContainer>
<Button as="a" href='/preview' secondary={true}>Preview</Button>
    </Styled.Header>
  )
}

export default Header
