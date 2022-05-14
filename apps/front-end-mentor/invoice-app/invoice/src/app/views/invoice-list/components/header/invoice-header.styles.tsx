import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .invoice-header__text {
    color: ${({ theme }) => theme.text};
    margin-top: 0.5rem;
  }
  .invoice-header__menu {
    display: flex;
    align-items: center;
  }
  ${media.lessThan("medium")`
    margin-bottom: 3.3rem;
  `}
  ${media.lessThan("large")`
    margin-bottom: 5.6rem;
  `}
  ${media.greaterThan("large")`
    margin-bottom: 6.5rem;
  `}
`;
