import styled, { css } from "styled-components";

interface IProps {
  error?: string;
}

export const Wrapper = styled.div`
  margin-top: 2.4rem;
`;

export const Label = styled.label`
  color: var(--dark-bravo);
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 1.9rem;
  letter-spacing: -0.0180556rem;
  display: block;
  margin-bottom: 0.3rem;
`;

export const Span = styled.span`
  font-size: 1.3rem;
  line-height: 1.9rem;
  color: var(--dark-charlie);
  display: block;
  margin-bottom: 1.6rem;
`;

interface IProps {
  error?: string;
}
const shared = css<IProps>`
  background: var(--light-charlie);
  border-radius: 0.5rem;
  font-size: 1.5rem;
  line-height: 2.2rem;
  border: none;
  padding: 1.3rem 2.4rem;
  color: var(--dark-bravo);
  border: ${({ error }) => (error ? "1px solid var(--danger-alpha)" : "")};
  &:focus,
  &:focus-visible {
    outline-color: ${({ error }) =>
      error ? "1px solid var(--danger-alpha)" : "var(--primary-bravo)"};
  }
`;

export const Input = styled.input<IProps>`
  ${shared}
  height: 4.8rem;
  width: 100%;
`;

export const TextArea = styled.textarea<IProps>`
  ${shared}
  min-width: 100%;
  height: 8rem;
`;

export const Error = styled.p`
  color: var(--danger-alpha);
  font-size: 1.4rem;
  line-height: 2rem;
  margin-top: 0.5rem;
`;
