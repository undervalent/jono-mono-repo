import styled from "styled-components";
import { Link } from "react-router-dom";

interface IProps {
  colorBorder?: string;
}

export const Wrapper = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;

export const ContentWrapper = styled.div<IProps>`
  background: var(--light-alpha);
  border-radius: 1rem;
  padding: 2.4rem;
  gap: 1.6rem;
  grid-template-rows: 1fr;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  border-top: ${({ colorBorder }) => `.8rem solid ${colorBorder}`};

  &:hover {
    h2 {
      color: var(--primary-bravo);
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: left;
`;
export const Headline = styled.h2`
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 1.9rem;
  letter-spacing: -0.0180556rem;
  color: var(--dark-bravo);
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
  background: var(--light-bravo);
  border-radius: 10px;
  cursor: pointer;
  color: var(--dark-bravo);
  &:hover {
    background: #cfd7ff;
  }
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
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.6rem;
`;
