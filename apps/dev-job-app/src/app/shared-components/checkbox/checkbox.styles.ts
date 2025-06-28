//@ts-nocheck

import styled from 'styled-components';
import * as Checkbox from '@radix-ui/react-checkbox';
interface IProps {
  isSelected: boolean;
}

export const CheckboxRoot = styled(Checkbox.Root)<IProps>`
  all: unset;
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.checkBoxSelectedBG : theme.checkBoxBG} !important;
  width: 25px !important;
  height: 25px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.headers};
  margin-left: 1.6rem;
`;

export const Container = styled.div<IProps>`
  display: flex;
  align-items: center;
`;
