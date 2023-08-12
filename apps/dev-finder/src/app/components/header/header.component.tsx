import React from 'react'
import { useRecoilState } from 'recoil';
import * as Styled from './header.styles';
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { themeState } from '../../state';

function useHeaderData() {

  const [theme,setTheme] = useRecoilState(themeState);

  return [{theme: theme.toUpperCase()},{setTheme: () => setTheme(prev => prev === 'dark' ? 'light':'dark')}]
}

export function Header() {
 const [{theme},{setTheme}] = useHeaderData();
 const icon = theme === 'DARK' ? <BsFillSunFill /> : <FaMoon />;


 
 return (<Styled.Wrapper>
    <h1>devfinder</h1>
    <Styled.ThemeButton onClick={setTheme}>
      {theme}
      {icon}
    </Styled.ThemeButton>
          </Styled.Wrapper>)

}

export default Header
