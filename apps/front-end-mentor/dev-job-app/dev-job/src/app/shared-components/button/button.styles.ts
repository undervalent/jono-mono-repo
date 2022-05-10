import styled from "styled-components";

interface IProps {
  purpose: "primary" | "secondary";
  width?: number;
}

export const Wrapper = styled.button<IProps>`
  background: ${({ theme, purpose }) =>
    purpose === "secondary"
      ? theme.secondaryBtnBackground
      : "var(--primary-alpha)"};
  border-radius: 5px;
  color: ${({ theme, purpose }) =>
    purpose === "secondary" ? theme.secondaryBtnText : "#fff"};
  padding: 1.6rem 4rem;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.6rem;
  cursor: pointer;
  &:hover {
    background: ${({ theme, purpose }) =>
      purpose === "secondary"
        ? theme.secondaryBtnBackgroundHover
        : "var(--primary-bravo)"};
`;

export const Link = styled.a<IProps>`
text-decoration: none;
display: block;
text-align: center;
background: ${({ theme, purpose }) =>
  purpose === "secondary"
    ? theme.secondaryBtnBackground
    : "var(--primary-alpha)"};
border-radius: 5px;
color: ${({ theme, purpose }) =>
  purpose === "secondary" ? theme.secondaryBtnText : "#fff"};
padding: 1.6rem 4rem;
font-weight: bold;
font-size: 1.6rem;
line-height: 1.6rem;
cursor: pointer;
&:hover {
  background: ${({ theme, purpose }) =>
    purpose === "secondary"
      ? theme.secondaryBtnBackgroundHover
      : "var(--primary-bravo)"};
`;
