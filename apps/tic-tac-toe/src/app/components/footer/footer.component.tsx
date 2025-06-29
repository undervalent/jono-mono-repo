import React from 'react';
import styles from './footer.module.css';
import { getGameStats } from '@state/features/game';
import { useAppSelector } from '@state/index';
import { Chip } from '@components/chip';

export function Footer() {
  const { xWin, oWin, ties, winLabel, lossLabel } =
    useAppSelector(getGameStats);

  return (
    <section className={styles.container}>
      <Chip variant="xwin" title={winLabel} value={xWin} />
      <Chip variant="ties" title="ties" value={ties} />
      <Chip variant="owin" title={lossLabel} value={oWin} />
    </section>
  );
}
