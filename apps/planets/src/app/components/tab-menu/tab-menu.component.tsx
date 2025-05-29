import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ISubSection } from '../../lib/types';

import { Wrapper, MenuButton } from './tab-menu.styles';
import {
  getSelectedPlanet,
  setSelectedSection,
  getSelectedSection,
} from '../../lib/state/planets';

export const TabMenu = () => {
  const dispatch = useDispatch();
  const currentSection = useSelector(getSelectedSection);
  const { color } = useSelector(getSelectedPlanet);

  function handleSelection(section: ISubSection) {
    dispatch(setSelectedSection(section));
  }
  return (
    <Wrapper>
      <MenuButton
        planetColor={color}
        isActive={currentSection === 'overview'}
        className="top-menu__button"
        onClick={() => handleSelection('overview')}
      >
        Overview
      </MenuButton>
      <MenuButton
        planetColor={color}
        isActive={currentSection === 'structure'}
        className="top-menu__button"
        onClick={() => handleSelection('structure')}
      >
        Structure
      </MenuButton>
      <MenuButton
        planetColor={color}
        isActive={currentSection === 'geology'}
        className="top-menu__button"
        onClick={() => handleSelection('geology')}
      >
        Geology
      </MenuButton>
    </Wrapper>
  );
};
