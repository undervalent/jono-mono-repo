import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "react-router-dom";

export const Wrapper = styled.article``;

export const ContentWrapper = styled.div`
  background: var(--light-alpha);
  border-radius: 1rem;
  display: grid;
  padding: 2.4rem;
  gap: 1.6rem;
  grid-template-rows: 1fr;
  align-items: center;

  ${media.greaterThan("small")`
  grid-template-columns: 8rem 1fr 4.4rem;
  grid-template-rows: 1fr;
  padding:  2.8rem 3.2rem 2.2rem 3.2rem;
`}
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  grid-column: 1/-1;
  grid-row: 1/2;
  text-align: left;

  ${media.greaterThan("small")`
    align-self: start;
    grid-column: 2/3;
    grid-row: 1/1;
  `};
`;
export const Headline = styled(Link)`
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 1.9rem;
  letter-spacing: -0.0180556rem;
  color: var(--dark-bravo);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: var(--primary-bravo);
  }
`;
export const Text = styled.p`
  font-size: 1.3rem;
  line-height: 1.9rem;
  color: var(--dark-charlie);
`;

export const Category = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 11.1rem;
  height: 3rem;
  background: var(--light-bravo);
  border-radius: 1rem;
  padding: 1.6rem;
  color: var(--primary-bravo);
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 1.9rem;
`;

export const UpVotes = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 1.9rem;
  letter-spacing: -0.0180556rem;
  width: 6.9rem;
  height: 3.2rem;
  background: ${({ disabled }) =>
    disabled ? "var(--primary-bravo)" : "var(--light-bravo)"};
  border-radius: 10px;
  cursor: ${({ disabled }) => (disabled ? "none" : "pointer")};
  grid-column: 1/2;
  grid-row: 2/3;
  color: ${({ disabled }) =>
    disabled ? "var(--light-alpha)" : "var(--dark-bravo)"};

  &:hover {
    background: #cfd7ff;
  }

  ${media.greaterThan("small")`
    flex-direction: column;
    align-self: start;
    width: 4rem;
    height: 5.3rem;
    gap: 1rem;
    padding: .8rem;
    grid-row: 1/1;
  `}
`;

export const Comments = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 1.9rem;
  letter-spacing: -0.0180556rem;
  grid-row: 2/3;
  grid-column: 3/4;
  color: var(--dark-bravo);

  ${media.greaterThan("small")`
    grid-row: 1/1;
    align-self: center;
  `}
`;
