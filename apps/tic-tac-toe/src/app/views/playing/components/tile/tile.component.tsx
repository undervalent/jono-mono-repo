import React from 'react'
import styles from './tile.module.css'

import XHoverIcon from '../../../../../assets/icon-x-outline.svg';
import XIcon from '../../../../../assets/icon-x.svg';
import OHoverIcon from '../../../../../assets/icon-o-outline.svg';
import OIcon from '../../../../../assets/icon-o.svg';
import OWinIcon from '../../../../../assets/icon-o-win.svg';
import XWinIcon from '../../../../../assets/icon-x-win.svg';

import { getCurrentPlayer, setBoardAction, getGameStatus, getWinningCondition } from '../../../../../state/features/game';
import { useAppSelector, useAppDispatch } from '../../../../../state/index';

type Value = string | null;
type Idx = number;

interface Props {
  value: Value;
  idx: Idx;
}

function useTile(value: Value, idx: Idx) {
  const dispatch = useAppDispatch();
  const currentPlayer = useAppSelector(getCurrentPlayer);
  const status = useAppSelector(getGameStatus);
  const winningCondition = useAppSelector(getWinningCondition);

  const hoveredIcon = currentPlayer === 'X' ? <img src={XHoverIcon} alt="X hover" className={styles.hovered} /> : <img src={OHoverIcon} alt="O hover" className={styles.hovered}/>;

  let icon = null;

  switch (value) {
    case 'X':
      icon = <img src={XIcon} alt="X selected" className={styles.selected} />;
      break;
    case 'O':
      icon = <img src={OIcon} alt="O selected" className={styles.selected} />;
      break;
    default:
      icon = hoveredIcon;
      break;
  }

  if (winningCondition && winningCondition.includes(idx)) {
  switch (value) {
    case 'X':
      icon = <img src={XWinIcon} alt="X selected" className={styles.selected} />;
      break;
    case 'O':
      icon = <img src={OWinIcon} alt="O selected" className={styles.selected} />;
      break;
    default:
      break;
  }
  }



  return [{
    icon,
    status
  }, {
    handleTileClick: ()=> dispatch(setBoardAction(idx))
  }]
}

export function Tile({ value, idx }: Props) {
  const [{ icon, status }, { handleTileClick }] = useTile(value, idx);


  return (
    <button className={styles.tile} onClick={handleTileClick} disabled={status === 'completed'} >
      {icon}
    </button>
  )
}
