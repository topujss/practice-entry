import React from 'react';
import { useSelector } from 'react-redux';
import Color from '../../components/bgColor/Color';
import Counter from '../../components/counter/Counter';
import Header from '../../components/Header/Header';

export const Home = () => {
  const color = useSelector((state) => state);
  return (
    <>
      <main className={`h-screen overflow-hidden ${color}`}>
        <Header />
        <section className="max-w-screen-lg mx-auto">
          {/* <Counter /> */}
          <Color />
        </section>
      </main>
    </>
  );
};
