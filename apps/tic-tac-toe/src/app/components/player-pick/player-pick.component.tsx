import React from 'react'
import styles from './player-pick.module.css'
import { PlayerSwitch } from '../player-switch'

export default function PlayerPick() {
  return (
    <article className={styles.container}>
      <h2 className={styles.header}>Pick player 1's mark</h2>
      <PlayerSwitch />
      <p className={styles.sub}>Remember: X goes first</p>
    </article>
  )
}
