import React from 'react'

import { useAppSelector, useAppDispatch } from '../../../../../state';
import { getStats, startNewGame, toggleModal,nextGame } from '../../../../../state/features/game';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '../../../../../components/button';
import styles from './modal.module.css';
import xIcon from '../../../../../assets/icon-x.svg'
import oIcon from '../../../../../assets/icon-o.svg'
import clsx from 'clsx'
import { getIsModalActive } from '../../../../../state/features/game';

function useModal() {
  const dispatch = useAppDispatch();
  const isModalActive = useAppSelector(getIsModalActive);
  const { currentPlayer, outcome, description, title, cancelText, submitText } = useAppSelector(getStats);
  const playerIcon = currentPlayer === 'X' ? xIcon : oIcon;

  const playNextGame = () => dispatch(nextGame());
  const newGame = () => {
    dispatch(startNewGame());
  };
  return [
    {
      title,
      description,
      isModalActive,
      currentPlayer,
      outcome,
      icon: outcome === 'win' ? playerIcon : null,
      cancelText,
      submitText
    },
    {
      handleCancel: () => outcome ? newGame(): dispatch(toggleModal()),
      handleSubmit: () => outcome ? playNextGame() : newGame(),
  }
  ]
}


export function Modal() {
  const [{ currentPlayer, outcome, icon, isModalActive, description, title, cancelText, submitText }, {
    handleCancel,
    handleSubmit
  }] = useModal();
  return (
    <Dialog.Root open={isModalActive}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <div className={styles.wrapper}>
            <Dialog.Title className={styles.title}>{title}</Dialog.Title>

            <Dialog.Description className={clsx(styles.description, {
              [styles.playerx]: currentPlayer === "X" && outcome === 'win',
              [styles.playero]: currentPlayer === "O" && outcome === 'win',
            })}>
              {icon && <img src={icon} alt={`${currentPlayer} mark`} />}
              {description}
            </Dialog.Description>
            <div className={styles.menu}>
              <Button size="md" variant="subtle" onClick={handleCancel}>
                {cancelText}
              </Button>
              <Button size="md" onClick={handleSubmit}> {submitText}</Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>)
}
