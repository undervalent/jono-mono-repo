import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { themeState, avatarState } from "../../state";
import { Wrapper } from "./navbar.styles";

export const NavBar = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const avatarImg = useRecoilValue(avatarState);
  const handleThemToggle = () =>
    setTheme((val) => (val === "light" ? "dark" : "light"));
  const iconColor = "#858BB2";

  const icon =
    theme === "light" ? (
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
