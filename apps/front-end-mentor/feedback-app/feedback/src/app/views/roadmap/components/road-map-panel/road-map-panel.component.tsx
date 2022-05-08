import React from "react";

import { IRoadMapItem } from "@feedback/types";
import { RoadMapItem } from "../roadmap-item";
import {
  Header,
  Wrapper,
  RequestWrapper,
  TitleText,
} from "./road-map-panel.styles";

interface IProps {
  data: IRoadMapItem;
}

export const RoadMapPanel: React.FC<IProps> = ({ data }) => {
  const { panelName, requests, color, title } = data;
  const header = `${panelName} (${requests.length})`;
  console.log(panelName, data);
  return (
    <Wrapper>
      <Header>{header}</Header>
      <TitleText>{title}</TitleText>
      <RequestWrapper>
        {requests.map((item) => (
          <RoadMapItem key={item.id} data={item} colorBorder={color} />
        ))}
      </RequestWrapper>
    </Wrapper>
  );
};
