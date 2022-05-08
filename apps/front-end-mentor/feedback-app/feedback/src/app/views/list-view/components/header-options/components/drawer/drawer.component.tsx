import React from "react";

import { Wrapper } from "./drawer.styles";
import { useLockBodyScroll } from "../hooks";

import { RoadmapLegend } from "../../../roadmap-legend";
import { FilterMenu } from "../../../filter-menu";
export const Drawer = () => {
  useLockBodyScroll();
  return (
    <Wrapper>
      <div className="container__overlay"></div>
      <div className="container__sidebar">
        <div>
          <FilterMenu />
        </div>
        <div>
          <RoadmapLegend />
        </div>
      </div>
    </Wrapper>
  );
};
