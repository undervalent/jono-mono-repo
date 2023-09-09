// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Intro } from './views/intro';
import { Playing } from './views/playing';
import { getGameStatus } from '../state/features/game';
import { useAppSelector } from '../state';
import { Completed } from './views/playing/components/completed';

function useAppData() {
  const gameStatus = useAppSelector(getGameStatus);

  return {
    gameStatus
  }
}

export function App() {
  const { gameStatus } = useAppData();
  return (
    <main className={styles.container}>
      <Completed />
      {gameStatus === 'intro' && <Intro />}
      {(gameStatus === 'playing' || gameStatus === 'completed') && <Playing />}
    </main>
  );
}

export default App;
