import React from 'react';
import classNames from 'classnames';
import styles from './chip.module.css';

interface Props {
  variant: string;
  title: string;
  value: number;
}

export function Chip({ variant, title, value }: Props) {
  const classes = classNames(styles.chip, {
    [styles.win]: variant === 'xwin',
    [styles.loss]: variant === 'owin',
    [styles.ties]: variant === 'ties',
  });
  return (
    <article className={classes}>
      <h2 className={styles.headline}>{title}</h2>
      <p className={styles.value}>{value}</p>
    </article>
  );
}
