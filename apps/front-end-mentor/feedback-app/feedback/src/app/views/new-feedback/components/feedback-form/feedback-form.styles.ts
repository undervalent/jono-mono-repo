import styled from "styled-components";
import media from "styled-media-query";
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  .add-feedback-btn {
    width: 100%;
  }
  .cancel-btn {
    width: 100%;
  }

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
