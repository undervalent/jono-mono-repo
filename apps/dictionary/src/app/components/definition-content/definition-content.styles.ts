// @ts-nocheck

import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Headline = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.fontSize5};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
export const Phonetic = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.fontSize.fontSize4};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: normal;
`;
export const Source = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
export const SourceLabel = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.lightGray};
  margin-right: 1rem;
`;

export const SourceLink = styled.a`
  color: ${({ theme }) => theme.text};
`;
export const ErrorWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const ErrorHeader = styled.h2`
  font-size: 2rem;
  font-weight: 700;
`;
export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.4rem;
`;
