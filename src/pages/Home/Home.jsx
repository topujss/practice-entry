import React from 'react';
import Counter from '../../components/counter/Counter';
import Header from '../../components/Header/Header';

export const Home = () => {
  return (
    <>
      <Header />
      <section className="max-w-screen-lg mx-auto">
        <Counter />
      </section>
    </>
  );
};
