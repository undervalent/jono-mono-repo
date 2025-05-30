import React from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { Wrapper } from './navbar.styles';

import { useSelector, useDispatch } from 'react-redux';
import { getTheme, toggleTheme } from '../../state/ui';

export const NavBar = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);
  const handleThemToggle = () => dispatch(toggleTheme());

  const iconColor = '#858BB2';
  const avatarImg = '';

  const icon =
    theme === 'light' ? (
      <BsFillMoonFill color={iconColor} size="26px" />
    ) : (
      <BsFillSunFill color={iconColor} size="26px" />
    );

  return (
    <Wrapper>
      <div className="navbar__logo">
        <div className="navbar__logo-icon"></div>
        <div className="navbar__logo-bottom"></div>
      </div>
      <div className="navbar__menu">
        <div className="navbar__menu-btn-wrapper">
          <button
            type="button"
            className="navbar__theme-toggle-btn"
            onClick={handleThemToggle}
            aria-label="light dark theme toggle"
          >
            {icon}
          </button>
        </div>
        <div className="navbar__avatar-wrapper">
          <img src={avatarImg} alt="avatar" className="navbar__avatar" />
        </div>
      </div>
    </Wrapper>
  );
};
