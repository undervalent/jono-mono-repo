import { GameBoard } from './game';
import * as _ from 'remeda';
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function handleValidation(gameState: GameBoard) {
  let roundWon = false;

  let i = 0;
  for (i; i <= 7; i++) {
    const winCondition = winningConditions[i];
    const a = gameState[winCondition[0]];
    const b = gameState[winCondition[1]];
    const c = gameState[winCondition[2]];

    if (!a || !b || !c) {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    return {
      status: 'win',
      winningCondition: winningConditions[i],
    };
  }

  const roundDraw = !gameState.includes('');

  if (roundDraw) {
    return {
      status: 'tie',
      winningCondition: null,
    };
  }

  return {
    status: '',
    winningCondition: null,
  };
}

type NumberArray = any;
export function getAvailableSpaces(gameBoard: string[]) {
  const emptySpaces: NumberArray = [];

  gameBoard.forEach((element: string, idx: number) => {
    if (element) return;
    emptySpaces.push(idx);
  });

  return emptySpaces;
}

export function getRandomItem(gameBoard: string[]) {
  const availableSpaces = getAvailableSpaces(gameBoard);
  console.log('availableSpaces -->', availableSpaces);
  const randomItem = _.sample(1)(availableSpaces)[0];
  console.log('RANDOME ITEM -->', randomItem);

  return randomItem;
}
export function sleep(milliseconds: number) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
