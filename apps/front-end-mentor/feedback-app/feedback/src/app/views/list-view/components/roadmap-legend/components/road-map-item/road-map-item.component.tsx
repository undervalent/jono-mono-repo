import React from "react";
import _ from "lodash";

import { IRoadMapItem } from "@feedback/types";
import { Wrapper, Circle, Count } from "./road-map-item.styles";

interface IRoadMapItemProps {
  name: any;
  roadMap: IRoadMapItem;
}
export const RoadMapItem: React.FC<IRoadMapItemProps> = ({ roadMap, name }) => {
  return (
    <Wrapper>
      <Circle name={name} />
      <span>{_.startCase(name)}</span>
      <Count>{roadMap.requests.length}</Count>
    </Wrapper>
  );
};
