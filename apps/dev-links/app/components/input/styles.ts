import styled from "styled-components";
import * as Form from "@radix-ui/react-form";

export const FormField = styled(Form.FormField)`
  position: relative;
  display: grid;
  margin: ${({ theme }) => `${theme.spacing.size1} 0`};
`;

export const Label = styled(Form.Label)<{errorMessage: boolean}>`
  font-size: ${({ theme }) => theme.fontSize.fontSize1};
  margin-bottom: ${({ theme }) => theme.spacing.three};
  color: ${({theme,errorMessage}) => errorMessage ? theme.colors.danger : theme.colors.black};
`;

export const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.default};
  height: ${({ theme }) => theme.spacing.size12};
  line-height: 1;
  border-radius: ${({ theme }) => theme.radius.large};
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.size3} ${theme.spacing.size10}`};

  &:active, &:focus {
    box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);
  }
`;

export const FormMessage = styled(Form.Message)`
  color: ${({ theme }) => theme.colors.danger };
  font-size: ${({theme}) => theme.fontSize.fontSize1};
  position: absolute;
  right: ${({theme}) => theme.spacing.size3};
  top: ${({theme}) => theme.spacing.size10};
`

export const IconWrapper = styled.div`
  position: absolute;
  top: ${({theme})=> theme.spacing.size11};
  left: ${({theme}) => theme.spacing.size3};
`;
