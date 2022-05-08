import styled from "styled-components";

interface IProps {
  error?: string;
}
export const Wrapper = styled.div<IProps>`
  position: relative;
  .container__input {
    background: var(--light-charlie);
    border-radius: 0.5rem;
    font-size: 1.5rem;
    line-height: 2.2rem;
    min-width: 100%;
    border: none;
    height: 8rem;
    padding: 1.3rem 2.4rem;
    color: var(--dark-bravo);
    border: ${({ error }) => (error ? "1px solid var(--danger-alpha)" : "")};
    &:focus,
    &:focus-visible {
      outline-color: ${({ error }) =>
        error ? "1px solid var(--danger-alpha)" : "var(--primary-bravo)"};
    }
  }
  .container__input:focus + label {
    transform: translate(0, -50%);
    opacity: 1;
  }

  .container__label {
    left: 8px;
    position: absolute;
    top: -1.2rem;
    opacity: 0;
    transition: all 200ms;
  }
`;

export const Error = styled.p`
  color: var(--danger-alpha);
  font-size: 1.4rem;
  line-height: 2rem;
  margin-top: 0.5rem;
`;
