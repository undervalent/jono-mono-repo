import styled from "styled-components";
// import * as Form from "@radix-ui/react-form";

export const Input = styled.input`
  all: unset;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.default};
  font-size: ${({ theme }) => theme.fontSize.fontSize1};
  caret-color: ${({ theme }) => theme.colors.violet};
  background-color: transparent;
  height: ${({ theme }) => theme.spacing.size6};
  line-height: 1;
  &::selection {
    color: ${({ theme }) => theme.text};
  }
  &::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
