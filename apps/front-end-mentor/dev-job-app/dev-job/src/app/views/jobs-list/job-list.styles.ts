import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.section`
  width: 100%;

  .job-listings {
    display: grid;
    grid-row-gap: 4.9rem;
    margin-top: 5.7rem;
  }

  ${media.greaterThan("medium")`
  .job-listings {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.1rem;
    margin-top: 7rem;
  }
  `}
  ${media.greaterThan("large")`
  .job-listings {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 3rem;
    margin-top: 10.5rem;
  }
  `}
`;
