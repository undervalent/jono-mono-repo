import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./header.styles";
import logo from "../../assets/desktop/logo.svg";
import { ThemeSwitch } from "./components/theme-switch";
export const Header = () => {
  return (
    <Wrapper>
      <div className="header-container">
        <h1>
          <Link to="/">
            <img src={logo} alt="devjobs" />
          </Link>
        </h1>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </Wrapper>
  );
};
