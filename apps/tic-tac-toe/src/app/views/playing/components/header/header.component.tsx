import React from 'react'
import Logo from '../../../../../assets/logo.svg'
import styles from './header.module.css'
import { getCurrentPlayer, toggleModal } from '../../../../../state/features/game';
import { useAppSelector, useAppDispatch } from '../../../../../state/index';
import { Button } from '../../../../../components/button/button.component';
import RestartIcon from '../../../../../assets/icon-restart.svg';

export function Header() {
  const dispatch = useAppDispatch();
  const currentPlayer = useAppSelector(getCurrentPlayer);
  const handleToggleModal = () => dispatch(toggleModal())

  return (
    <section className={styles.container}>
      <h1>
        <img src={Logo} alt="tic tac toe logo" />
      </h1>
      <span className={styles.turn}>
      <span>{currentPlayer}</span> <span>turn</span>
      </span>
      <Button size="sm" variant="subtle" onClick={handleToggleModal}>
         <img src={RestartIcon} alt="restart game"/>
      </Button>
    </section>
  )
}

