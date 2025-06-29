import React from 'react';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import { Board } from '@components/board';
import styles from './playing.module.css';
import { Modal } from '@components/modal';
import { useHandleCpuTurn } from './hooks';

export function Playing() {
  useHandleCpuTurn();
  return (
    <section className={styles.container}>
      <Modal />
      <Header />
      <Board />
      <Footer />
    </section>
  );
}
