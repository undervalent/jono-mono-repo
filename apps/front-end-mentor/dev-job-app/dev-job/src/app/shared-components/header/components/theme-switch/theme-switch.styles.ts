import styled from "styled-components";

interface Props {
  isChecked: boolean;
}
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .sun-icon {
    margin-right: 1.6rem;
  }
  .moon-icon {
    margin-left: 1.6rem;
  }
`;

export const SwitchWrapper = styled.label<Props>`
  display: flex;
  cursor: pointer;
  border-radius: 9999px;
  /* Size */
  height: 2.4rem;
  width: 4.8rem;
  background-color: #fff;
  border: 1px solid #fff;
  /* Push the circle to the right */
  justify-content: ${({ isChecked }) =>
    isChecked ? "flex-end" : "flex-start"};
  align-items: center;
  .label__input {
    display: none;
  }
  .label__circle {
    cursor: pointer;
    border-radius: 9999px;
    /* Size */
    width: 1.4rem;
    height: 1.4rem;
    margin: 2px 2px;
    background-color: var(--primary-alpha);
  }

  &:hover .label__circle {
    background-color: var(--primary-bravo);
  }
`;
