import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.section`
  gap: 3.7rem;
  justify-content: space-between;
  background: ${({ theme }) => theme.contentBackground};
  padding: 4.8rem;
  border-radius: 1.5rem;
  box-shadow: 0 1.6rem 3rem -1rem rgba(70, 96, 187, 0.198567);
`;

export const ImageWrapper = styled.div`
  max-width: 11.7rem;
`;
export const Avatar = styled.img`
  max-width: 100%;
  border-radius: 100rem;
`;

export const UserContent = styled.article`
  width: 100%;
`;
export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${media.greaterThan("medium")`
    flex-direction: row;
 `}
`;

export const Bio = styled.p`
  margin-top: 2rem;
  margin-bottom: 3.2rem;
`;
export const Statistics = styled.div`
  background: ${({ theme }) => theme.background};
  border-radius: 1rem;
  padding: 1.5rem 3.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  ${media.greaterThan("medium")`
    text-align:left;
  `}
`;
export const SocialInfo = styled.div`
  margin-top: 3.7rem;
  columns: 2;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StatName = styled.span``;
export const StatValue = styled.span`
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 3.3rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.headers};
`;

interface IntSocialItem {
  isDisabled?: boolean;
}

export const SocialItem = styled.div<IntSocialItem>`
  display: flex;
  gap: 2rem;
  opacity: ${({ isDisabled }) => (isDisabled ? ".5" : "1")};
  margin-right: 4.2rem;
  margin-bottom: 2rem;
`;

export const SocialItemText = styled.span`
  color: ${({ theme }) => theme.text};
`;
