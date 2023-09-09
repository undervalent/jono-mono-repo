import React from 'react'
import clsx from 'clsx'
import styles from './chip.module.css'

interface Props {
  variant: string;
  title: string;
  value: number;
}

export function Chip({ variant, title, value }: Props) {

  return (
    <article
      className={
        clsx(styles.chip, {
          [styles.win]: variant === 'win',
          [styles.loss]: variant === 'loss',
          [styles.ties]: variant === 'ties',
        })
      }
    >
      <h2 className={styles.headline}>{title}</h2>
      <p className={styles.value}>{value}</p>
    </article>
  );
}
