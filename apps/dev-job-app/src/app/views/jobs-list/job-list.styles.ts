// @ts-nocheck
import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  width: 100%;
`;

export const Listings = styled.div`
  display: grid;
  grid-row-gap: ${({ theme }) => theme.spacing.size12};
  margin: ${({ theme }) => `${theme.spacing.size14} auto 0 auto`};
  grid-column-gap: ${({ theme }) => theme.spacing.size8};
  grid-template-columns: repeat(auto-fit, minmax(30rem, 32.7rem));
  justify-content: center;

  ${media.greaterThan('medium')`
    margin-top: ${({ theme }) => theme.spacing.size18};
  `}

  ${media.greaterThan('large')`
    margin-top: ${({ theme }) => theme.spacing.size100};
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => `${theme.spacing.size8} 0`};
`;
