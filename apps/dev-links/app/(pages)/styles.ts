import styled from "styled-components";
import * as Form from "@radix-ui/react-form";
import Link from "next/link";

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const FormContainer = styled.section`
  margin-top: ${({ theme }) => theme.spacing.size17};
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.size7};
  max-width: 47.6rem;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.fontSize3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.size7};
`;

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.fontSize2};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  margin-bottom: ${({ theme }) => theme.spacing.size7};
  color: ${({ theme }) => theme.colors.grayDark};
`;

export const FormRoot = styled(Form.Root)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.size2};
`;

export const FormField = styled(Form.FormField)`
  display: grid;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: ${({theme})=> theme.spacing.size8};
`;

export const Message = styled.p`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
`;

export const Url = styled(Link)`
  color: ${({ theme }) => theme.colors.accentDark};
  font-size: ${({ theme }) => theme.fontSize.fontSize2};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
export const FooterSubTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.fontSize2};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.grayDark};
  margin: ${({theme})=> theme.spacing.size5} 0;
`;

export const ButtonWrapper = styled.div`
  margin-top: ${({theme})=> theme.spacing.size5};
`
