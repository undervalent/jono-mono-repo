import React from 'react'
import * as Switch from '@radix-ui/react-switch';
import styles from './player-switch.module.css'
import X from '../../../../../assets/icon-x.svg'
import O from '../../../../../assets/icon-o.svg'
import { useAppDispatch, useAppSelector } from '../../../../../state/index';
import { getFirstPlayerMark, setFirstPlayerMark } from '../../../../../state/features/game';


function usePlayerSwitch() {

  const dispatch = useAppDispatch();
  const firstPlayerMark = useAppSelector(getFirstPlayerMark);

  return [
    { firstPlayerMark },
    {
      handlePlayerSwitch: (val: boolean) => {
        dispatch(setFirstPlayerMark(val))
      }
    }
  ]
}

export function PlayerSwitch() {
  const [{firstPlayerMark}, {handlePlayerSwitch}] = usePlayerSwitch();
  return (
    <Switch.Root className={styles.root} id="player-mark"
      aria-label={`first player currently set to ${firstPlayerMark}`}
      value={firstPlayerMark}
      checked={firstPlayerMark === 'O'}
      onCheckedChange={handlePlayerSwitch}>
      <img className={styles.xmark} src={X} alt="x mark" />
      <img className={styles.omark} src={O} alt="o mark" />
        <Switch.Thumb className={styles.thumb} />
    </Switch.Root>
  )
}

