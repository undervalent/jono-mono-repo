import React from "react";
import { useRoadMapData } from "../../../../lib/hooks";
import { RoadMapPanel } from "../road-map-panel";
import { Wrapper } from "./column-list.styles";

export const ColumnList = () => {
  const [{ roadMapData, keys }] = useRoadMapData();

  return (
    <Wrapper>
      {keys.map((el) => (
        <RoadMapPanel key={el} data={roadMapData[el]} />
      ))}
    </Wrapper>
  );
};
