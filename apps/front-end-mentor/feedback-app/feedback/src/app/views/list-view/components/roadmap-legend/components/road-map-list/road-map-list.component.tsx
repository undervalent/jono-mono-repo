import React from "react";

import { RoadMapItem } from "../road-map-item";
import { useRoadMapData } from "../../../../../../lib/hooks";
import { Wrapper } from "./road-map-list.styles";

export const RoadMapList = () => {
  const [{ roadMapData, keys }] = useRoadMapData();
  return (
    <Wrapper>
      {keys.map((el) => (
        <RoadMapItem key={el} roadMap={roadMapData[el]} name={el} />
      ))}
    </Wrapper>
  );
};
