import styled from "styled-components";
import media from "styled-media-query";
export const Wrapper = styled.div`
  height: 100%;
  left: 0;
  position: fixed;
  top: 7.2rem;
  width: 100%;
  z-index: 9999;

  .container__overlay {
    height: 100%;
    left: 0;
    position: fixed;
    top: 7.2rem;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
  .container__sidebar {
    height: 100%;
    left: 0;
    position: fixed;
    top: 7.2rem;
    width: 100%;
    background: ${({ theme }) => theme.background};
  }

  ${media.greaterThan("medium")`
    top: 0;
    left: 10.3rem;

    .container__overlay {
    left: 10.3rem;
    top: 0;
  }
  .container__sidebar {
    left: 10.3rem;
    top: 0;
    width: 71.9rem;
  }
  `}
`;
