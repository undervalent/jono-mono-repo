import React from 'react'
import Logo from '../../../../../assets/logo.svg'
import styles from './header.module.css'
import { getCurrentPlayer, restartGame } from '../../../../../state/features/game';
import { useAppSelector, useAppDispatch } from '../../../../../state/index';
import { Button } from '../../../../../components/button/button.component';
import Restart from '../../../../../assets/icon-restart.svg'

function useHeader() {
  const dispatch = useAppDispatch();
  const currentPlayer = useAppSelector(getCurrentPlayer);



  return [{
    currentPlayer
  }, {
    handleRestart: () => dispatch(restartGame())
  }]
}


export function Header() {
  const [{ currentPlayer },{handleRestart}] = useHeader();
  return (
    <section className={styles.container}>
      <h1>
        <img src={Logo} alt="tic tac toe logo" />
      </h1>
      <span className={styles.turn}>
      <span>{currentPlayer}</span> <span>turn</span>
      </span>
      <Button size="sm" variant="subtle" onClick={handleRestart}>
         <img src={Restart} alt="restart game"/>
      </Button>
    </section>
  )
}

