import React from "react";

import { MobileHeader } from "./components/mobile-header";
import { TabletHeader } from "./components/tablet-header";
import { useDevice } from "../../../../lib/hooks";

export const HeaderOptions = () => {
  const device = useDevice();
  const visibleHeader =
    device === "mobile" ? <MobileHeader /> : <TabletHeader />;

  return <>{visibleHeader}</>;
};
