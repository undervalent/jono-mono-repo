import styled from "styled-components";

export const CheckboxWrapper = styled.div`
  height: 3rem;
  input {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    position: relative;
    border: 0;
    outline: 0;
    width: 0;
    height: 0;
    display: none;
  }
  input ~ label {
    min-width: 4.8rem;
    height: 3rem;
    padding: 0 1.6rem;
    border-radius: 1rem;
    display: flex;
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 1.9rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: var(--light-bravo);
  }
  input ~ label:hover {
    background: #cfd7ff;
  }
  input:checked ~ label {
    background: var(--primary-bravo);
    color: var(--light-alpha);
  }
`;
