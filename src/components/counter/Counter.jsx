import React, { useReducer } from 'react';

/** Reducer useCases
 * @use const [initialValue, dispatch] = useReducer(changableFunction, initialValue);
 * initialValue: first value of the reducer
 * dispatch: to change value of changableFunction && those values will receive by action on the function && has 2 values:
 * type - pass the type,
 * payload - pass the value;
 * changableFunction: function that change the value of initialValue
 * @example const [counter, dispatch] = useReducer(counterReducer, 0);
 */

/** Reducer function
 * @example const counterReducer = (state, action) => {switch case};
 * state - previous value of the reducer
 * action - the value of dispatch && can be destructured. { type, payload}
 * switch case by default get state from reducer;
 */
const counterReducer = (state, { type, payload }) => {
  switch (type) {
    case 'XTEAM':
      return {
        ...state,
        counter: 1000,
      };

    case 'RANDOM':
      return {
        ...state,
        counter: Math.floor(Math.random() * 1000),
      };

    case 'RESET':
      return {
        ...state,
        counter: 0,
      };

    case 'INC':
      return {
        ...state,
        counter: state.counter + 1,
      };

    case 'DEC':
      return {
        ...state,
        counter: state.counter - 1,
      };

    case 'AUTO':
      return {
        ...state,
        auto: payload,
      };

    case 'HOLD':
      return {
        ...state,
        hold: payload,
      };

    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { counter: 0, auto: null, hold: null }); // this is the reducer

  const btnStyle = `text-white border-0 py-2 px-6 focus:outline-none  hover:shadow-inner rounded text-lg mr-3`;

  const handleAuto = (value) => {
    if (value === 'Start') {
      let timer = setInterval(() => {
        dispatch({ type: 'INC' });
      }, 100);
      dispatch({ type: 'AUTO', payload: timer });
    } else {
      clearInterval(state.auto);
      dispatch({ type: 'AUTO', payload: null });
    }
  };

  const handleUp = () => {
    let timer = setInterval(() => {
      dispatch({ type: 'INC' });
    }, 1000);
    dispatch({ type: 'HOLD', payload: timer });
  };

  const handleDown = () => {
    clearInterval(state.hold);
    dispatch({ type: 'HOLD', payload: null });
  };

  return (
    <>
      <div className="max-w-screen-lg mx-auto text-center">
        <h1 className="text-center text-9xl font-bold">{state.counter}</h1>
        <hr className="my-5" />
        <button
          className={`${btnStyle} bg-cyan-400 hover:bg-cyan-500`}
          onMouseUp={handleUp}
          onMouseDown={handleDown}
          onClick={() => dispatch({ type: 'INC' })}
        >
          {state.hold ? 'Hold Me Tight' : 'Hold me'}
        </button>
        <button
          className={`${btnStyle} bg-emerald-400 hover:bg-emerald-500`}
          onClick={() => dispatch({ type: 'XTEAM', payload: '' })}
        >
          Xteam set
        </button>
        <button
          className={`${btnStyle} bg-teal-400 hover:bg-teal-500`}
          onClick={() => dispatch({ type: 'RANDOM', payload: '' })}
        >
          Random
        </button>
        <button
          className={`${btnStyle} bg-green-400 hover:bg-green-500`}
          onClick={() => handleAuto(state.auto ? 'Stop' : 'Start')}
        >
          {state.auto ? 'Stop' : 'Start'}
        </button>
        <button
          className={`${btnStyle} bg-red-400 hover:bg-red-500`}
          onClick={() => dispatch({ type: 'RESET', payload: '' })}
        >
          Reset
        </button>
        <button
          className={`${btnStyle} bg-sky-400 hover:bg-sky-500`}
          onClick={() => dispatch({ type: 'INC', payload: '' })}
        >
          Increment
        </button>
        <button
          className={`${btnStyle} bg-orange-400 hover:bg-orange-500`}
          onClick={() => dispatch({ type: 'DEC', payload: '' })}
        >
          Decrement
        </button>
      </div>
    </>
  );
};
