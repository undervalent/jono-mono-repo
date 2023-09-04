import styled from "styled-components";

export const Container = styled.audio``

export const Button = styled.button`
color: ${({ theme }) => theme.colors.accent};
width: ${({theme})=> theme.size.size18};
height: ${({theme})=> theme.size.size18};
border-radius: ${({theme})=> theme.radius.circle};
background-color: ${({ theme }) => theme.colors.elementBg};
cursor: pointer;
`
