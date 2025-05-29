import React from 'react';
import * as Styled from './header.styles';
import { FaMoon } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { getTheme, setTheme } from '../../state/ui';

function useHeaderData() {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);

  return [
    { theme: theme.toUpperCase() },
    {
      handleSetTheme: () =>
        dispatch(setTheme(theme === 'dark' ? 'light' : 'dark')),
    },
  ];
}

export function Header() {
  const [{ theme }, { handleSetTheme }] = useHeaderData();
  const icon = theme === 'DARK' ? <BsFillSunFill /> : <FaMoon />;

  return (
    <Styled.Wrapper>
      <h1>devfinder</h1>
      <Styled.ThemeButton onClick={handleSetTheme}>
        {theme}
        {icon}
      </Styled.ThemeButton>
    </Styled.Wrapper>
  );
}

export default Header;
