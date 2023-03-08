import React from 'react';
import { useSelector } from 'react-redux';
import Color from '../../components/bgColor/Color';
import Counter from '../../components/counter/Counter';
import Food from '../../components/Food/Food';
import Header from '../../components/Header/Header';

export const Home = () => {
  const { color, food } = useSelector((state) => state);
  return (
    <>
      <main
        className={`h-screen overflow-hidden ${color} bg-cover bg-no-repeat`}
        style={{
          backgroundImage: `url(${food})`,
        }}
      >
        {/* <Header /> */}
        <section className="max-w-screen-lg mx-auto ">
          <Counter title="counter varities" />
          <Color title="color varities" />
          <Food title="scene selection" />
        </section>
      </main>
    </>
  );
};
