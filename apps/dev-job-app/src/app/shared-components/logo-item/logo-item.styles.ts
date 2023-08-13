import styled from "styled-components";
import media from "styled-media-query";

interface IWrapper {
  background: string;
  expandable?: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ background }) => background};
  width: 5rem;
  height: 5rem;
  border-radius: var(--logo-border-radius);

  ${({ expandable }) => media.greaterThan("medium")`
  width:${expandable ? "14rem" : "5rem"};
  height:${expandable ? "14rem" : "5rem"};
  border-radius: ${
    expandable ? "0px 0px 0px 6px" : "var(--logo-border-radius)"
  };

  > img {
    width: ${expandable ? "8rem" : ""};;
  }
`}
`;

// ${({ bgColor }) => media.greaterThan('sm')`
//     /* Use bgColor */
//     background-color: ${ bgColor ? bgColor  : '#fff' };
//  `};
