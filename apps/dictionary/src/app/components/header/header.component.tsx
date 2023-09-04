import React from 'react'
import styled from 'styled-components'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { BiBook } from 'react-icons/bi'

import { Switch } from '../switch'
import { DropDown } from '../dropdown'

const Container = styled.header`
margin-top: 5.8rem;
display: flex;
justify-content: space-between;
`
const Menu = styled.div`
display: flex;
align-items: center;
`

export const Header = () => {
  return (
    <Container>
      <h1>
        <AccessibleIcon.Root label='Dictionary App'>
          <BiBook size={36} color="#757575"  />
        </AccessibleIcon.Root>
      </h1>
      <Menu>
      <DropDown />
      <Switch />
      </Menu>
    </Container>
  )
}
