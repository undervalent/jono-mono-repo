import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2.4rem;
  gap: 1.6rem;

  ${media.greaterThan("small")`
  display: grid;
  grid-template-columns: 1fr 11.7rem;
`}
`;
