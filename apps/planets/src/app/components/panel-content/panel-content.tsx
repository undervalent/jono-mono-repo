import React from 'react';
import { Wiki } from './components/wiki';
import { usePlanetImage } from '../../lib/hooks';
import { PlanetContentWrapper } from './panel-content.styles';
import { SectionMenu } from './components/section-menu';
import { useSelector } from 'react-redux';
import {
  getSelectedSection,
  getSelectedPlanetData,
} from '../../lib/state/planets';

interface Props { }

export const PanelContent: React.FC<Props> = () => {
  const activePlanet = useSelector(getSelectedPlanetData);
  const section = useSelector(getSelectedSection);
  console.log('ACTIVE PLANET -->', activePlanet);

  const images = usePlanetImage(activePlanet.name);
  const content = activePlanet[section];

  const setImage = () => {
    switch (section) {
      case 'geology':
        return images && images[section] ? (
          <div className="image-container">
            <div className="planet-image-wrapper">
              <img
                className="planet-image"
                src={`${images['overview']}`}
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

      default:
        return images && images[section] ? (
          <div className="image-container">
            <img
              className="planet-image"
              src={`${images[section]}`}
              alt={activePlanet.name}
            />
          </div>
        ) : null;
    }
  };

  return (
    <PlanetContentWrapper>
      {setImage()}
      <div className="planet-content">
        <div className="planet-information">
          <h2 className="panel-headline">{activePlanet.name}</h2>
          <p>{content.content}</p>
          <Wiki source={content.source} />
        </div>
        <SectionMenu />
      </div>
    </PlanetContentWrapper>
  );
};
