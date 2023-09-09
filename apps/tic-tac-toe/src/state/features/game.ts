import {
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "..";
import { handleValidation } from "./utils";

export type GameBoard = string[];

interface InitialState {
  status: 'intro' | 'playing' | 'completed',
  xWin: number;
  oWin: number;
  ties: number;
  currentPlayer: 'X' | 'O';
  gameBoard: GameBoard;
  firstPlayerMark: 'X' | 'O';
  secondPlayerMark: 'X' | 'O';
  isCpu: boolean;
  winningCondition: number[] | null;
}

const gameBoard = ['', '', '', '', '', '', '', '', ''];

const initialState:InitialState = {
  status: 'intro',
  xWin: 0,
  oWin: 0,
  ties: 0,
  currentPlayer: 'X',
  firstPlayerMark: 'X',
  secondPlayerMark: 'O',
  isCpu: true,
  gameBoard: ['', '', '', '', '', '', '', '', ''],
  winningCondition: null,
}

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setFirstPlayerMark: (state, action) => {
      if (action.payload) {
        state.firstPlayerMark = 'O'
        state.secondPlayerMark = 'X'
      }
      else {
        state.firstPlayerMark = 'X'
        state.secondPlayerMark = 'O'
      }
    },
    setIsCpu: (state, action) => {
      state.isCpu = action.payload
      state.status = 'playing'
    },
    restartGame: (state) => {
      state.gameBoard = gameBoard
      state.currentPlayer = 'X'
      state.status = 'playing'
    },
    setBoardAction: (state, action) => {
      const currentPlayer = state.currentPlayer;
      const newBoard = [...state.gameBoard]
      newBoard[action.payload] = state.currentPlayer;
      const {status, winningCondition} = handleValidation(newBoard);

      state.gameBoard[action.payload] = currentPlayer;
      state.winningCondition = winningCondition

      if (status) {
        state.status = "completed"
        if (status === 'tie') {
          state.ties = state.ties + 1;
        }
        if (status === 'win') {
          currentPlayer === 'X' ? state.xWin = state.xWin + 1 : state.oWin = state.oWin + 1;
        }
        return;
      }

      state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X'
    },
    startNewGame: (state) => {
      state.status = 'intro';
      state.xWin = 0;
      state.oWin = 0;
      state.ties = 0;
      state.currentPlayer = 'X';
      state.firstPlayerMark= 'X';
      state.secondPlayerMark = 'O';
      state.isCpu = true;
      state.gameBoard = ['', '', '', '', '', '', '', '', ''];
      state.winningCondition = null;
    }
  }
})

export const { setFirstPlayerMark, setIsCpu, restartGame, setBoardAction, startNewGame } = gameSlice.actions

export const getFirstPlayerMark = (state:RootState) => state.game.firstPlayerMark;
export const getSecondPlayerMark = (state:RootState) => state.game.secondPlayerMark;
export const getGameStatus = (state:RootState) => state.game.status
export const getCurrentPlayer = (state:RootState) => state.game.currentPlayer
export const getGameStats = (state: RootState) => {
  const playerMark = state.game.firstPlayerMark;
  const isCpu = state.game.isCpu;

  const firstPlayer = isCpu ? 'you' : 'P1';
  const secondPlayer = isCpu ? 'cpu' : 'P2'

  const winLabel = playerMark === 'X' ? firstPlayer : secondPlayer;
  const lossLabel = playerMark === 'O' ? firstPlayer : secondPlayer;
  return {
    winLabel: `X (${winLabel})`,
    lossLabel: `O (${lossLabel})`,
    xWin: state.game.xWin,
    ties: state.game.ties,
    oWin: state.game.oWin
  }

}
export const getGameBoard = (state: RootState) => state.game.gameBoard
export const getWinningCondition = (state: RootState) => state.game.winningCondition

