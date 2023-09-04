import React from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import * as Styled from './switch.styles'
import { toggleTheme } from '../../state/features/ui';
import { useAppDispatch } from '../../state/hooks';
import { IoMoonOutline } from 'react-icons/io5'


export const Switch = () => {
  const dispatch = useAppDispatch();

  return (
    <Styled.Container>
      <Styled.SwitchRoot
        onCheckedChange={() => dispatch(toggleTheme())}
      >
        <Styled.SwitchThumb />
      </Styled.SwitchRoot>
      <AccessibleIcon.Root label="Moon">
        <Styled.IconWrapper>
          <IoMoonOutline size={20} />
      </Styled.IconWrapper>
      </AccessibleIcon.Root>
    </Styled.Container>
  );
}
