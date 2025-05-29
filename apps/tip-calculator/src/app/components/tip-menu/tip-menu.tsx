import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './tip-menu.css';
import { TipMenuButton } from '../tip-menu-button';
import { setTipPercentage, getTipPercentage } from '../../../state/ui';

const percentageValues = [5, 10, 15, 25, 50];

export const TipMenu: React.FC = () => {
  const dispatch = useDispatch();

  const percent = useSelector(getTipPercentage);
  const handleClick = (val: number) => dispatch(setTipPercentage(val));
  const inputHandler = (e: any) =>
    dispatch(setTipPercentage(Math.abs(e.target.value)));
  const buttons = percentageValues.map((el) => (
    <TipMenuButton
      key={`menu-button-${el}`}
      value={el}
      clickHandler={handleClick}
    />
  ));
  return (
    <>
      <span className="tip-menu__header">Select Tip %</span>
      <div className="tip-menu">
        {buttons}
        <input
          className="tip-menu__input"
          placeholder="Custom"
          type="number"
          value={percent || ''}
          onChange={inputHandler}
        />
      </div>
    </>
  );
};
