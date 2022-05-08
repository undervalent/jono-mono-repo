import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  left: 0;
  position: fixed;
  top: 7rem;
  width: 100%;
  z-index: 9999;

  .container__overlay {
    height: 100%;
    left: 0;
    position: fixed;
    top: 7rem;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    z-index: -1;
  }
  .container__sidebar {
    display: flex;
    flex-direction: column;
    height: 100%;
    right: 0;
    position: fixed;
    top: 7rem;
    width: 27.1rem;
    background-color: var(--light-charlie);
    padding: 2.4rem;
    gap: 2.4rem;
  }
`;
