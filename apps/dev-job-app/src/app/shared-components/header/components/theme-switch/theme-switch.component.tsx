import { SwitchWrapper, Wrapper } from "./theme-switch.styles";
import { useAppDispatch, useAppSelector } from "../../../../state";
import { toggleTheme } from "../../../../state/features/ui";
import moon from "../../../../../assets/desktop/icon-moon.svg";
import sun from "../../../../../assets/desktop/icon-sun.svg";

export const ThemeSwitch = () => {
  const theme = useAppSelector((state) => state.ui.theme);
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(toggleTheme());
  const isChecked = theme === "dark";

  return (
    <Wrapper>
      <div className="sun-icon">
        <img src={sun} alt="sun icon for them switch" />
      </div>
      <SwitchWrapper isChecked={isChecked}>
        <input
          type="checkbox"
          id="theme"
          className="visually-hidden"
          checked={isChecked}
          onChange={handleClick}
          aria-label="theme toggle"
        />

        <div className="label__circle"></div>
      </SwitchWrapper>
      <div className="moon-icon">
        <img src={moon} alt="moon icon for theme switch" />
      </div>
    </Wrapper>
  );
};
