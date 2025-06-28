import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getSelectedSection,
  getSelectedPlanetData,
  setSelectedSection,
} from '../../../../lib/state/planets';
import { ISubSection } from '../../../../lib/types';
import { Button } from '../button';

import { Wrapper } from './section-menu.styles';

interface Sections {
  section: ISubSection;
  label: string;
}

const sections: Sections[] = [
  { section: 'overview', label: 'Overview' },
  { section: 'structure', label: 'Internal Structure' },
  { section: 'geology', label: 'surface goelogy' },
];

export const SectionMenu = () => {
  const dispatch = useDispatch();
  const { color } = useSelector(getSelectedPlanetData);
  const section = useSelector(getSelectedSection);
  const clickHandler = (section: ISubSection) =>
    dispatch(setSelectedSection(section));

  return (
    <Wrapper>
      {sections.map((el, idx) => (
        <Button
          key={el.section}
          displayNumber={`0${idx + 1}`}
          color={section === el.section ? color : 'transparent'}
          clickHandler={clickHandler}
          section={el.section}
        >
          {el.label}
        </Button>
      ))}
    </Wrapper>
  );
};
