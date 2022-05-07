import React from "react";
import { IPlanet } from "@planet-types";
import { useRecoilValue } from "recoil";
import { selectedPlanet, selectedSection } from "../../state";
import { Wiki } from "./components/wiki";

import { PlanetContentWrapper } from "./panel-content.styles";
import { SectionMenu } from "./components/section-menu";

function setImage(activePlanet: IPlanet, section: string) {
  const images = activePlanet?.images;
  switch (section) {
    case "geology":
      return images && images[section] ? (
        <div className="image-container">
          <div className="planet-image-wrapper">
            <img
              className="planet-image"
              src={`${images["planet"]}`}
              alt={activePlanet.name}
            />
            <img
              className="geology-image"
              src={`${images[section]}`}
              alt={`${activePlanet.name}-${section}`}
            />
          </div>
        </div>
      ) : null;

    case "structure":
      return activePlanet?.images?.["internal"] ? (
        <div className="image-container">
          <img
            className="planet-image"
            src={`${activePlanet?.images?.["internal"]}`}
            alt={activePlanet.name}
          />
        </div>
      ) : null;

    default:
      return activePlanet?.images?.["planet"] ? (
        <div className="image-container">
          <img
            className="planet-image"
            src={`${activePlanet?.images?.["planet"]}`}
            alt={activePlanet.name}
          />
        </div>
      ) : null;
  }
}

function usePanelData() {
  const activePlanet = useRecoilValue(selectedPlanet);
  const section = useRecoilValue(selectedSection);
  const content = activePlanet[section];
  const image = setImage(activePlanet, section);

  const state = {
    activePlanet,
    content,
    image,
  };

  return [state];
}

export const PanelContent = () => {
  const [{ activePlanet, content, image }] = usePanelData();
  return (
    <PlanetContentWrapper>
      {image}
      <div className="planet-content">
        <div className="planet-information">
          <h2 className="panel-headline">{activePlanet?.name}</h2>
          <p>{content.content}</p>
          <Wiki source={content.source} />
        </div>
        <SectionMenu />
      </div>
    </PlanetContentWrapper>
  );
};
