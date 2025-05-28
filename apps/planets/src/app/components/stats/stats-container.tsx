import React from 'react';
import { StatItem } from './stat-item/';
import { Wrapper } from './stats-container.styles';
import { useSelector } from 'react-redux';
import { getSelectedPlanetData } from '../../lib/state/planets';

export const StatsContainer = () => {
  const activePlanet = useSelector(getSelectedPlanetData);
  const { rotation, revolution, radius, temperature } = activePlanet;
  return (
    <Wrapper>
      <StatItem label="Rotation Time" value={rotation} />
      <StatItem label="Revolution Time" value={revolution} />
      <StatItem label="Radius" value={radius} />
      <StatItem label="Average temp." value={temperature} />
    </Wrapper>
  );
};
