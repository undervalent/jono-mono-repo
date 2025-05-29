import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../lib/state/ui';

import { Wrapper } from './backdrop.styles';
import { useLockBodyScroll } from '../../lib/hooks';

export const Backdrop: React.FC = () => {
  useLockBodyScroll();
  const dispatch = useDispatch();
  const clickHandler = () => dispatch(toggleMenu());

  return <Wrapper onClick={clickHandler}></Wrapper>;
};
