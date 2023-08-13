import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  [data-reach-dialog-content] {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    background: #ffffff;
    box-shadow: 0px 1rem 1rem -1rem rgba(72, 84, 159, 0.100397);
    border-radius: 0.8rem;
    width: 48rem;
    height: 24.9rem;
    padding: 4.8rem;
  }
  [data-reach-dialog-overlay] {
    display: flex;
    align-items: center;
  }
  .dialog-header {
    font-size: 2.4rem;
    line-height: 3.2rem;
    letter-spacing: -0.05rem;
    margin-bottom: 1.3rem;
  }
  .dialog-text {
    font-size: 1.2rem;
    line-height: 2.2rem;
    letter-spacing: -0.025px;
    color: #888eb0;
  }
  .dialog-menu {
    display: flex;
    align-self: flex-end;
    margin-top: 1.6rem;
    gap: 0.8rem;
  }
`;
