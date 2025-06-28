//@ts-nocheck

import styled from 'styled-components';

interface IProps {
  purpose: 'primary' | 'secondary';
  width?: number;
}

export const Wrapper = styled.button<IProps>`
  background: ${({ theme, purpose }) =>
    purpose === 'secondary'
      ? theme.secondaryBtnBackground
      : 'var(--primary-alpha)'};
  border-radius: 5px;
  color: ${({ theme, purpose }) =>
    purpose === 'secondary' ? theme.secondaryBtnText : '#fff'};
  padding: ${({ theme }) => `${theme.spacing.size4} ${theme.spacing.size3}`};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.fontSize2};
  line-height: ${({ theme }) => theme.lineHeight.lineHeight1};
  min-width: ${({ width }) => (width ? `${width / 10}rem` : '100%')};
  cursor: pointer;
  &:hover {
    background: ${({ theme, purpose }) =>
      purpose === 'secondary'
        ? theme.secondaryBtnBackgroundHover
        : 'var(--primary-bravo)'};
  }
`;

export const Link = styled.a<IProps>`
  text-decoration: none;
  display: block;
  text-align: center;
  background: ${({ theme, purpose }) =>
    purpose === 'secondary'
      ? theme.secondaryBtnBackground
      : 'var(--primary-alpha)'};
  border-radius: 5px;
  color: ${({ theme, purpose }) =>
    purpose === 'secondary' ? theme.secondaryBtnText : '#fff'};
  padding: ${({ theme }) => `${theme.spacing.size4} ${theme.spacing.size10}`};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.fontSize2};
  line-height: ${({ theme }) => theme.lineHeight.lineHeight1};
  cursor: pointer;
  &:hover {
    background: ${({ theme, purpose }) =>
      purpose === 'secondary'
        ? theme.secondaryBtnBackgroundHover
        : 'var(--primary-bravo)'};
  }
`;
