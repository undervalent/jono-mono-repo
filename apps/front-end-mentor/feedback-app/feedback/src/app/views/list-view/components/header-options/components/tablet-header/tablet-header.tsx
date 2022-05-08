import React from "react";

import { ListHeader } from "../../../list-header";
import { FilterMenu } from "../../../filter-menu";
import { RoadmapLegend } from "../../../roadmap-legend";
import { Wrapper } from "./tablet-header.styles";

export const TabletHeader = () => {
  return (
    <Wrapper>
      <ListHeader />
      <RoadmapLegend />
      <FilterMenu />
    </Wrapper>
  );
};
