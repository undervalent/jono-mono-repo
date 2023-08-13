import styled from "styled-components";

export const Wrapper = styled.section`
  border-radius: ${({ theme }) => theme.radius.medium};
  min-height: ${({ theme }) => theme.spacing.size20};
  padding: ${({ theme }) => ` ${theme.spacing.none}  ${theme.spacing.size4}`};
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  background: ${({ theme }) => theme.elementBackground};
  width: 100%;
  align-items: center;
  gap: 1rem;
`;

export const MenuWrapper = styled.footer`
  display: flex;
  gap: 1.5rem;
`;
