import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../../../lib/state/ui';

import { Wrapper } from './toggle-button.styles';

export const ToggleButton: React.FC = () => {
  const dispatch = useDispatch();
  const clickHandler = () => dispatch(toggleMenu());

  return (
    <Wrapper onClick={clickHandler}>
      <span className="toggle-button__line" />
      <span className="toggle-button__line" />
      <span className="toggle-button__line" />
    </Wrapper>
  );
};
