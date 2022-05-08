import React from "react";
import { Link } from "react-router-dom";

import { Wrapper, Header } from "./roadmap-legend.styles";
import { RoadMapList } from "./components/road-map-list";
export const RoadmapLegend = () => {
  return (
    <Wrapper>
      <Header>
        <h2>Roadmap</h2>
        <Link to="/roadmap">view</Link>
      </Header>
      <RoadMapList />
    </Wrapper>
  );
};
