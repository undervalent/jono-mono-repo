import React from 'react'
import { getGameBoard } from '../../../../../state/features/game';
import { useAppSelector } from '../../../../../state/index';
import { Tile } from '../tile';
import styles from './board.module.css'
import { useHandleCpuTurn } from '../../hooks/hooks';

export function Board() {
  useHandleCpuTurn();
  const board = useAppSelector(getGameBoard);

  return (
    <section className={styles.container}>
      {board.map((el,idx) => <Tile key={`tile-${idx}`} value={el} idx={idx} />)}
    </section>
  )
}
