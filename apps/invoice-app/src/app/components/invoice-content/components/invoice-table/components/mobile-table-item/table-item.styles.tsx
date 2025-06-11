import styled from "styled-components";
import media from "styled-media-query";

export const MobileItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-bottom: 2.4rem;
  &:last-child {
    margin-bottom: 0;
  }

  .mobile-item__quantity {
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: -0.025rem;
    display: block;
    margin-top: 0.8rem;
    color: ${({ theme }) => theme.quantity};
  }
  .mobile-item__total {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: -0.025rem;
    color: ${({ theme }) => theme.headers};
  }
  ${media.greaterThan("small")`
      display: none;
  `}
`;
