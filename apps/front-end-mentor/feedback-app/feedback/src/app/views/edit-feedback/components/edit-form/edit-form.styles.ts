import styled from "styled-components";
import media from "styled-media-query";

export const ButtonWrapper = styled.div`
  display: grid;
  gap: 1.6rem;

  ${media.greaterThan("small")`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: 1fr 15.8rem 14.4rem;

  .cancel-btn {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`}
`;

export const DeleteWrapper = styled.div`
  ${media.greaterThan("small")`
    width: 15.8rem;
`}
`;
