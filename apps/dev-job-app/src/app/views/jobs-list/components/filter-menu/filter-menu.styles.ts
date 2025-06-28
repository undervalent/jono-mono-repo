// @ts-nocheck
import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: ${({ theme }) => theme.radius.medium};
  min-height: ${({ theme }) => theme.spacing.size20};
  padding: ${({ theme }) => ` ${theme.spacing.none}  ${theme.spacing.size4}`};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: stretch;
  justify-content: space-between;
  background: ${({ theme }) => theme.elementBackground};
  width: 100%;
  align-items: center;
  gap: 1rem;
`;

export const MenuWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.size4};
  justify-content: end;
`;
