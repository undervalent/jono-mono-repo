import styled from 'styled-components';
import * as Select from '@radix-ui/react-select';
import { determineFontFamily } from '../../lib/utils';

export const SelectTrigger = styled(Select.SelectTrigger)`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  height: 3.5rem;
  gap: 5rem;
  color: ${({ theme }) => theme.text};
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.4rem;
`;

export const SelectIcon = styled(Select.SelectIcon)``;

export const SelectContent = styled(Select.Content)`
  background-color: ${({theme})=> theme.elementBackground};
  border-radius: 1.6rem;
  box-shadow: ${({ theme }) => `0 5px 20px 0 ${theme.elementShadow}`};
  color: ${({theme})=>theme.text};
  padding: 2.4rem;
  margin-top: 6rem;
  `;

export const SelectViewport = styled(Select.Viewport)`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const StyledItem = styled(Select.Item)`
  display: flex;
  align-items: center;
  position: relative;
  user-select: none;
  color: ${({ theme }) => `${theme.text} !important`};
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.4rem;
  font-family: ${({ value }) => determineFontFamily(value)};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
  }

  & > [data-highlighted] {
    outline: none;
    color: ${({ theme }) => theme.colors.accent};
    color: red;
  }
`;

export const SelectLabel = styled(Select.Label)`
  padding: 0 25px;
  font-size: 12px;
  line-height: 25px;
`;


export const StyledItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
