import { createSlice, createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';
import { handleValidation, getRandomItem, sleep } from './utils';
export type GameBoard = string[];

interface InitialState {
  status: 'intro' | 'playing' | 'completed';
  xWin: number;
  oWin: number;
  ties: number;
  currentPlayer: 'X' | 'O';
  gameBoard: GameBoard;
  firstPlayerMark: 'X' | 'O';
  secondPlayerMark: 'X' | 'O';
  isVsCpu: boolean;
  winningCondition: number[] | null;
  outcome: 'win' | 'tie' | '';
  isModalActive: boolean;
}

const initialGameBoard = ['', '', '', '', '', '', '', '', ''];

const initialState: InitialState = {
  status: 'intro',
  xWin: 0,
  oWin: 0,
  ties: 0,
  currentPlayer: 'X',
  firstPlayerMark: 'X',
  secondPlayerMark: 'O',
  isVsCpu: true,
  gameBoard: ['', '', '', '', '', '', '', '', ''],
  winningCondition: null,
  outcome: '',
  isModalActive: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalActive = !state.isModalActive;
    },
    setFirstPlayerMark: (state, action) => {
      if (action.payload) {
        state.firstPlayerMark = 'O';
        state.secondPlayerMark = 'X';
      } else {
        state.firstPlayerMark = 'X';
        state.secondPlayerMark = 'O';
      }
    },
    setIsVsCpu: (state, action) => {
      state.isVsCpu = action.payload;
      state.status = 'playing';
    },
    nextGame: (state) => {
      state.gameBoard = initialGameBoard;
      state.currentPlayer = 'X';
      state.status = 'playing';
      state.outcome = '';
      state.isModalActive = false;
    },
    setBoardAction: (state, { payload: idx }) => {
      if (state.gameBoard[idx]) return;

      state.gameBoard[idx] = state.currentPlayer;

      const { status, winningCondition } = handleValidation(state.gameBoard);
      state.winningCondition = winningCondition;

      if (status) {
        state.status = 'completed';
        state.isModalActive = true;
        state.outcome = status;

        if (status === 'win') {
          state.currentPlayer === 'X' ? (state.xWin += 1) : (state.oWin += 1);
        } else {
          state.ties += 1; // tie
        }
        return; // fine—returns undefined to Immer
      }

      state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
    },
    startNewGame: (state) => {
      state.status = 'intro';
      state.xWin = 0;
      state.oWin = 0;
      state.ties = 0;
      state.currentPlayer = 'X';
      state.firstPlayerMark = 'X';
      state.secondPlayerMark = 'O';
      state.isVsCpu = true;
      state.gameBoard = initialGameBoard;
      state.winningCondition = null;
      state.outcome = '';
      state.isModalActive = false;
    },
  },
});

export const {
  setFirstPlayerMark,
  setIsVsCpu,
  nextGame,
  setBoardAction,
  startNewGame,
  toggleModal,
} = gameSlice.actions;

export const getFirstPlayerMark = (state: RootState) =>
  state.game.firstPlayerMark;
export const getSecondPlayerMark = (state: RootState) =>
  state.game.secondPlayerMark;
export const getGameStatus = (state: RootState) => state.game.status;
export const getCurrentPlayer = (state: RootState) => state.game.currentPlayer;
export const getGameBoard = (state: RootState) => state.game.gameBoard;
export const getWinningCondition = (state: RootState) =>
  state.game.winningCondition;
export const getOutcome = (state: RootState) => state.game.outcome;
export const getIsVsCpu = (state: RootState) => state.game.isVsCpu;
export const getWinTiesLoss = (state: RootState) => {
  return {
    xWin: state.game.xWin,
    ties: state.game.ties,
    oWin: state.game.oWin,
  };
};

export const getStats = createSelector(
  [getCurrentPlayer, getFirstPlayerMark, getIsVsCpu, getOutcome],
  (currentPlayer, firstPlayerMark, isVsCpu, outcome) => {
    const vsCpuTitle =
      isVsCpu && firstPlayerMark === currentPlayer
        ? 'You won!'
        : 'On no, you lost...';
    const vsPlayerTitle =
      firstPlayerMark === currentPlayer ? 'Player 1 wins!' : 'Player 2 wins!';
    const description = outcome === 'tie' ? 'round tied' : 'Takes the round';
    const title = isVsCpu ? vsCpuTitle : vsPlayerTitle;

    return {
      currentPlayer,
      outcome,
      description: outcome ? description : 'Restart game',
      title: outcome ? title : '',
      cancelText: outcome ? 'Quit' : 'No, cancel',
      submitText: outcome ? 'Next round' : 'Yes, restart',
    };
  },
);
export const getIsCpuTurn = (state: RootState) =>
  state.game.currentPlayer === state.game.secondPlayerMark &&
  state.game.isVsCpu;
export const getGameStats = createSelector(
  [getFirstPlayerMark, getIsVsCpu, getWinTiesLoss],
  (playerMark, isVsCpu, { xWin, ties, oWin }) => {
    const firstPlayer = isVsCpu ? 'you' : 'P1';
    const secondPlayer = isVsCpu ? 'cpu' : 'P2';

    const winLabel = playerMark === 'X' ? firstPlayer : secondPlayer;
    const lossLabel = playerMark === 'O' ? firstPlayer : secondPlayer;
    return {
      winLabel: `X (${winLabel})`,
      lossLabel: `O (${lossLabel})`,
      xWin,
      ties,
      oWin,
    };
  },
);
export const getIsModalActive = (state: RootState) => state.game.isModalActive;
