import styles from './app.module.css';
import { Intro } from './views/intro';
import { Playing } from './views/playing';
import { getGameStatus } from '../state/features/game';
import { useAppSelector } from '../state';

function useAppData() {
  const gameStatus = useAppSelector(getGameStatus);

  return {
    gameStatus,
  };
}

export function App() {
  const { gameStatus } = useAppData();
  return (
    <main className={styles.container}>
      {gameStatus === 'intro' && <Intro />}
      {(gameStatus === 'playing' || gameStatus === 'completed') && <Playing />}
    </main>
  );
}

export default App;
