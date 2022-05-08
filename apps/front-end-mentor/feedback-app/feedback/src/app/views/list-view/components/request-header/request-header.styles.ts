import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  background: var(--dark-alpha);
  height: 5.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2.4rem 0.8rem 0;

  ${media.greaterThan("small")`
    border-radius: 1rem;
    padding: 1.4rem 1.2rem 1.2rem 2.4rem;
    height: 7.2rem;
  `}
  ${media.greaterThan("large")`
    width: 82.5rem;
  `}
`;

export const RequestInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const RequestIcon = styled.img`
  margin-right: 1.8rem;
`;

export const RequestHeadline = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.6rem;
`;
