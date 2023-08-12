import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ThemeButton = styled.button`
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 0.25rem;
  line-height: 1.925rem;
  font-size: 1.3rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${({ theme }) => theme.themeButton};

  &:hover {
    color: ${({ theme }) => theme.themeButtonHover};
  }
`;
