import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  background: var(--dark-charlie);
  height: 7.2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  .navbar__logo {
    position: relative;
    border-radius: 0px 20px 20px 0px;
    background: var(--primary-alpha);
    width: 7.2rem;
    height: 7.2rem;
  }
  .navbar__logo-bottom {
    position: absolute;
    width: 7.2rem;
    background: var(--primary-bravo);
    border-radius: 20px 0 20px 0px;
    height: 3.6rem;
    bottom: 0;
  }
  .navbar__logo-icon {
    position: absolute;
    width: 3rem;
    height: 3rem;
    background: white;
    z-index: 1;
    top: 2rem;
    left: 2rem;
    border-radius: 10rem;
  }
  .navbar__menu {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
  .navbar__menu-btn-wrapper {
    margin-right: 1.5rem;
  }
  .navbar__theme-toggle-btn {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
  .navbar__avatar-wrapper {
    height: 100%;
    width: 8rem;
    border-left: 1px solid #494e6e;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navbar__avatar {
    width: 4rem;
    height: 4rem;
    background: white;
    border-radius: 10rem;
    color: white;
    font-size: 0.5rem;
    text-align: center;
  }

  ${media.greaterThan("large")`
    flex-direction: column;
    height: 100vh;
    display: flex;
    align-items: stretch;
    width: 10.3rem;

    .navbar__logo {
    width: 10.3rem;
    height: 10.3rem;
  }
  .navbar__logo-bottom {
    width: 10.3rem;
    height: 5.1rem;
  }
  .navbar__logo-icon {
    width: 5rem;
    height: 5rem;
  }

  .navbar__menu {
    flex-direction: column;
  }
  .navbar__avatar-wrapper {
    border: none;
    border-top: 1px solid #494e6e;
    padding-top: 2.4rem;
    padding-bottom: 2.4rem;
  }
  .navbar__theme-toggle-btn {
    margin: 2.4rem; 0
  }
  `}
`;
