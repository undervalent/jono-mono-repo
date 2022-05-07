import React from "react";
import { useSetRecoilState } from "recoil";
import { drawerToggleState } from "../../state";
import { Wrapper } from "./backdrop.styles";
import { useLockBodyScroll } from "@jochoa-mono-repo/hooks";

function useBackdropData() {
  const setIsDrawerOpen = useSetRecoilState(drawerToggleState);
  const clickHandler = () => setIsDrawerOpen((prev) => !prev);

  return [{ clickHandler }];
}

export const Backdrop: React.FC = () => {
  useLockBodyScroll();
  const [{ clickHandler }] = useBackdropData();

  return <Wrapper onClick={clickHandler}></Wrapper>;
};
