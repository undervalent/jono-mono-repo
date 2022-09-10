import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  border-radius: 6px;
  min-height: 8rem;
  padding: 0 1.6rem;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  background: ${({ theme }) => theme.elementBackground};
  ${media.greaterThan("medium")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`};
`;

export const Divider = styled.div`
  width: 100%;

  ${media.greaterThan("medium")`
    border-right: 1px solid rgba(110, 128, 152, 0.2);
    margin-right: 1rem;
  padding-right: 1rem;
`};
`;

export const SelectMenu = styled.div`
  padding: 2rem 1rem;
`;

export const LastDivider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 100%;
`;

export const HideOnMobile = styled.div`
  display: none;

  ${media.greaterThan("medium")`
    display: block
  `};
`;
