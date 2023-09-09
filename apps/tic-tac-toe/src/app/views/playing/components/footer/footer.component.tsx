import React from 'react'
import styles from './footer.module.css'
import { getGameStats } from '../../../../../state/features/game';
import { useAppSelector } from '../../../../../state/index';
import { Chip } from '../chip/chip.component';

export function Footer() {
  const { xWin,oWin,ties, winLabel, lossLabel } = useAppSelector(getGameStats);

  return (
    <section className={styles.container}>
     <Chip variant="win" title={winLabel} value={xWin} />
     <Chip variant="ties" title="ties" value={ties} />
     <Chip variant="loss" title={lossLabel} value={oWin} />
    </section>
  )
}

