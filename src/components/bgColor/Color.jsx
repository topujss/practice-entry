import React from 'react';
import { useDispatch } from 'react-redux';

const Color = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="text-3xl mt-10 text-sky-500">Set bg Color</h1>
      <hr />
      <div className="btn-group my-5 flex gap-3 justify-center flex-wrap">
        <button
          className="text-xl bg-gray-500 rounded-md px-3 py-2 text-white"
          onClick={() => dispatch({ type: 'GRAY' })}
        >
          Gray
        </button>
        <button
          className="text-xl bg-red-500 rounded-md px-3 py-2 text-white"
          onClick={() => dispatch({ type: 'RED' })}
        >
          Red
        </button>
        <button
          className="text-xl bg-orange-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch({ type: 'ORANGE' })}
        >
          orange
        </button>
        <button
          className="text-xl bg-amber-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch({ type: 'AMBER' })}
        >
          amber
        </button>
        <button
          className="text-xl bg-yellow-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch({ type: 'YELLOW' })}
        >
          yellow
        </button>
        <button
          className="text-xl bg-lime-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch({ type: 'LIME' })}
        >
          lime
        </button>
        <button
          className="text-xl bg-green-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch({ type: 'GREEN' })}
        >
          green
        </button>
        <button
          className="text-xl bg-emerald-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch({ type: 'EMERALD' })}
        >
          emerald
        </button>
        <button
          className="text-xl bg-teal-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch({ type: 'TEAL' })}
        >
          teal
        </button>
        <button
          className="text-xl bg-cyan-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch({ type: 'CYAN' })}
        >
          cyan
        </button>
        <button
          className="text-xl bg-sky-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch({ type: 'SKY' })}
        >
          sky
        </button>
        <button
          className="text-xl bg-blue-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch({ type: 'BLUE' })}
        >
          blue
        </button>
        <button
          className="text-xl bg-indigo-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch({ type: 'INDIGO' })}
        >
          indigo
        </button>
        <button
          className="text-xl bg-violet-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch({ type: 'VIOLET' })}
        >
          violet
        </button>
        <button
          className="text-xl bg-purple-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch({ type: 'PURPLE' })}
        >
          purple
        </button>
        <button
          className="text-xl bg-fuchsia-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch({ type: 'FUCHSIA' })}
        >
          fuchsia
        </button>
        <button
          className="text-xl bg-pink-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch({ type: 'PINK' })}
        >
          pink
        </button>
        <button
          className="text-xl bg-rose-500 rounded-md px-3 py-2 text-white capitalize"
          onClick={() => dispatch({ type: 'ROSE' })}
        >
          rose
        </button>
      </div>
    </>
  );
};

export default Color;
