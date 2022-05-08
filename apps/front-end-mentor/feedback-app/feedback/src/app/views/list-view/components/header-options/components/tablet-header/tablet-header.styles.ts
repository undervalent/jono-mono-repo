import styled from "styled-components";
import media from "styled-media-query";
export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  ${media.greaterThan("large")`
    flex-direction: column;
  `}
`;
