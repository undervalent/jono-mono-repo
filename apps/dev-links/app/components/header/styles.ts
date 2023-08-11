import styled from 'styled-components'
import Link from "next/link"

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.size6};
`
export const NavigationContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: ${({theme})=> theme.spacing.size4};
`

export const NavigationLink = styled(Link)`
text-decoration: none;
display: inline-flex;
align-items: center;
gap: ${({ theme }) => theme.spacing.size2};
 color: ${({ theme }) => theme.colors.grayDark};
 font-size: ${({ theme }) => theme.fontSize.fontSize2};
 font-weight: ${({ theme }) => theme.fontWeight.demi};
 padding: ${({ theme } ) => `${theme.spacing.size3} ${ theme.spacing.size7}`};

&:hover, &:focus {
 color: ${({theme})=> theme.colors.accentDark};
}
`
