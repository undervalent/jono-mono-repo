import React from 'react';
import { useAppSelector, useAppDispatch } from '@state/index';
import {
  getCurrentPlayer,
  setBoardAction,
  getIsVsCpu,
  getGameBoard,
  getSecondPlayerMark,
} from '@state/features/game';
import sample from 'lodash-es/sample';

type NumberArray = number[];

function getAvailableSpaces(gameBoard: string[]) {
  const emptySpaces: NumberArray = [];

  gameBoard.forEach((element: string, idx: number) => {
    if (element) return;
    emptySpaces.push(idx);
  });

  return emptySpaces;
}

export function useHandleCpuTurn() {
  const dispatch = useAppDispatch();
  const gameBoard = useAppSelector(getGameBoard);
  const availableSpaces = getAvailableSpaces(gameBoard);
  const randomItem = sample(availableSpaces);
  const isVsCpu = useAppSelector(getIsVsCpu);
  const secondPlayerMark = useAppSelector(getSecondPlayerMark);
  const currentPlayer = useAppSelector(getCurrentPlayer);

  React.useEffect(() => {
    if (isVsCpu && currentPlayer === secondPlayerMark) {
      dispatch(setBoardAction(randomItem));
    }
    return () => {};
  }, [currentPlayer, secondPlayerMark, isVsCpu]);
}
