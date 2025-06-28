// @ts-nocheck
import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin: 3.6rem 0 2.4rem 0;
  position: relative;
  gap: 1rem;
`;

export const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 1.6rem;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.elementBackground};
  padding: 2rem 2.4rem;
  border: 1px solid
    ${({ hasError, theme }) => (hasError ? theme.colors.danger : 'transparent')};

  &:focus,
  &:active {
    border: 1px solid
      ${({ theme, hasError }) =>
        hasError ? theme.colors.danger : theme.colors.accent};
  }
  &:focus-visible {
    outline: 1px solid
      ${({ theme, hasError }) =>
        hasError ? theme.colors.danger : theme.colors.accent};
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 2rem;
  font-weight: 400;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
`;
