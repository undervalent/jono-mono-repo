import styled from "styled-components";

interface IProps {
  isSelected: boolean;
}

export const Wrapper = styled.label<IProps>`
  align-items: center;
  display: inline-flex;
  cursor: pointer;

  .label__input {
    /* Hide it */
    display: none;
  }

  .label__square {
    border-radius: 4px;
    width: 2.4rem;
    height: 2.4rem;
    background: ${({ theme, isSelected }) =>
      isSelected ? theme.checkBoxSelectedBG : theme.checkBoxBG};
  }

  .label__checkbox {
    background-color: transparent;
    border-radius: 0.4rem;
    height: 2.4rem;
    width: 2.4rem;
    margin-top: -0.2rem;
    margin-left: 0.5rem;
  }

  .label__checkbox--selected {
    /* For selected checkbox */
    background: ${({ theme }) => theme.checkBoxSelectedBG};
  }
  .label__text {
    font-weight: 700;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.headers};
    margin-left: 1.6rem;
  }
`;
