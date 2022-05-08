import React from "react";
import { useRecoilValue } from "recoil";

import { toggleDrawerState } from "../../../../../../state";
import { ListHeader } from "../../../list-header";
import { Drawer } from "../drawer";

export const MobileHeader = () => {
  const isDrawerToggled = useRecoilValue(toggleDrawerState);
  return (
    <div>
      <ListHeader />
      {isDrawerToggled && <Drawer />}
    </div>
  );
};
