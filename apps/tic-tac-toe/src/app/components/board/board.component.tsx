import React from 'react';
import { getGameBoard } from '@state/features/game';
import { useAppSelector } from '@state/index';
import { Tile } from '@components/tile';
import styles from './board.module.css';

export function Board() {
  const board = useAppSelector(getGameBoard);

  return (
    <section className={styles.container}>
      {board.map((el, idx) => (
        <Tile key={`tile-${idx}`} value={el} idx={idx} />
      ))}
    </section>
  );
}
