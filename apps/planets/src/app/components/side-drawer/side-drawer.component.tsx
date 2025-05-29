import React from 'react';
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import { Wrapper } from './side-drawer.styles';
import { MenuButton } from './components';
import { useSelector } from 'react-redux';
import { selectAllPlanets } from '../../lib/state/planets';
import { getIsMenuOpen } from '../../lib/state/ui';

import { IPlanet } from '../../lib/types';

export const SideDrawer: React.FC = () => {
  const planets = useSelector(selectAllPlanets);
  const isDrawerOpen = useSelector(getIsMenuOpen);
  const dataButtons = planets.map((planet: IPlanet) => (
    <li key={planet.name}>
      <Link to={planet.name} className="link">
        <MenuButton planet={planet} />
      </Link>
    </li>
  ));
  return (
    <Wrapper>
      <nav className={`side-drawer ${isDrawerOpen ? 'open' : ''}`}>
        <h1 className="side-drawer__header">The Planets</h1>
        <ul>{dataButtons} </ul>
      </nav>
    </Wrapper>
  );
};

export default SideDrawer;
