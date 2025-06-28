import React from 'react';
import { useAppSelector, useAppDispatch } from '@state/index';
import {
  getGameBoard,
  getIsCpuTurn,
  setBoardAction,
  getCurrentPlayer,
} from '@state/features/game';

type NumberArray = number[];

function getAvailableSpaces(gameBoard: string[]) {
  const emptySpaces: NumberArray = [];

  gameBoard.forEach((element: string, idx: number) => {
    if (element) return;
    emptySpaces.push(idx);
  });

  return emptySpaces;
}

export function useHandleCpuTurn() {}
