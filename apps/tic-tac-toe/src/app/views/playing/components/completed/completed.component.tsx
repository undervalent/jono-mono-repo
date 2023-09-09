import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import styles from './completed.module.css'
import { useAppDispatch, useAppSelector } from '../../../../../state';
import { getCurrentPlayer, getGameStatus, restartGame, startNewGame } from '../../../../../state/features/game';
import { Button } from '../../../../../components/button';

function useCompleted() {
  const dispatch = useAppDispatch();
  const currentPlayer = useAppSelector(getCurrentPlayer);
  const gameStatus = useAppSelector(getGameStatus);

  return [
    {
     currentPlayer,
     showDialogue: gameStatus === 'completed'
    },
    {
     handleNextGame: () => dispatch(restartGame()),
     handleNewGame: () => dispatch(startNewGame())
  }]
}

export function Completed() {
  const [{ showDialogue }, { handleNextGame, handleNewGame }] = useCompleted();
  return (
     <Dialog.Root open={showDialogue}>
    <Dialog.Trigger asChild>
      <button className="Button violet">Edit profile</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <div className={styles.wrapper}>
        <Dialog.Title className={styles.title}>Edit profile</Dialog.Title>
        <Dialog.Description className={styles.description}>
          Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <div className={styles.menu}>
          <Button size="md" variant="subtle" onClick={handleNewGame}>
            Quit
          </Button>
          <Button size="md" onClick={handleNextGame}> Next Round</Button>
            </div>
          </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
  )
}
