import React from 'react'
import PlayerPick from './components/player-pick/player-pick.component'
import { Button } from '../../../components/button'
import Logo from '../../../assets/logo.svg'
import styles from './intro.module.css'
import { setIsCpu } from '../../../state/features/game';
import { useAppDispatch } from '../../../state/index';

function useIntro() {

  const dispatch = useAppDispatch();

  return {
    handlePlayerCpu: () => {
      dispatch(setIsCpu(true))
    },
    handlePlayer: () => {
      dispatch(setIsCpu(false))
    }
  }
}


export function Intro() {
  const { handlePlayerCpu, handlePlayer } = useIntro();
  return (
    <section className={styles.container}>
      <img src={Logo} alt="tick tac toe logo"/>
      <PlayerPick />
      <div className={styles.menu}>
      <Button onClick={handlePlayerCpu}>
        New game (vs cpu)
      </Button>
        <Button variant="light"
        onClick={handlePlayer}
        >
        New game (vs player)
      </Button></div>
    </section>
  )
}

