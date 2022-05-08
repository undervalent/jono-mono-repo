import styled from "styled-components";
import media from "styled-media-query";
import { ButtonVariant } from "./types";
import { Link } from "react-router-dom";
const variantColors = {
  primary: {
    normal: "var(--primary-alpha)",
    hover: "#C75AF6",
  },
  secondary: {
    normal: "var(--primary-bravo)",
    hover: "#7C91F9",
  },
  tertiary: {
    normal: "var(--dark-bravo)",
    hover: "#656EA3",
  },
  danger: {
    normal: "var(--danger-alpha)",
    hover: "var(--danger-bravo)",
  },
  back: {
    normal: "",
    hover: "",
  },
  solidback: {
    normal: "var(--dark-alpha)",
    hover: "",
  },
};

export const ButtonWrapper = styled.button<{ variant: ButtonVariant }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  height: ${({ variant }) => (variant === "solidback" ? "5.3rem" : "4.4rem")};
  border-radius: 1rem;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  cursor: pointer;
  color: ${({ variant }) =>
    variant !== "back" ? "var(--light-bravo)" : "var(--dark-charlie)"};
  background-color: ${({ variant }) =>
    variant !== "back" ? variantColors[variant].normal : ""};
  &:hover {
    background-color: ${({ variant }) =>
      variant.includes("back") ? "" : variantColors[variant].hover};
    text-decoration: ${({ variant }) =>
      variant.includes("back") ? "underline" : "none"};
  }
  svg {
    margin-right: 1rem;
  }
`;

export const StyledLinkButton = styled(Link)<{ variant: ButtonVariant }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 15.8rem;
  height: ${({ variant }) => (variant === "solidback" ? "5.3rem" : "4.4rem")};
  border-radius: 1rem;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  cursor: pointer;
  color: ${({ variant }) =>
    variant !== "back" ? "var(--light-bravo)" : "var(--dark-charlie)"};
  background-color: ${({ variant }) =>
    variant !== "back" ? variantColors[variant].normal : ""};
  &:hover {
    background-color: ${({ variant }) =>
      variant.includes("back") ? "" : variantColors[variant].hover};
    text-decoration: ${({ variant }) =>
      variant.includes("back") ? "underline" : "none"};
  }
  svg {
    margin-right: 1rem;
  }
  text-decoration: none;
  cursor: pointer;
`;
