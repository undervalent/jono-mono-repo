import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  .label {
    align-items: center;
    display: inline-flex;
    cursor: pointer;
  }

  .label__input {
    display: none;
  }

  .label__square {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    margin-right: 8px;
    padding: 4px;
  }

  .label__checkbox {
    background-color: transparent;
    border-radius: 4px;
    height: 16px;
    width: 16px;
  }

  .label__checkbox--selected {
    background-color: #00449e;
  }
`;
