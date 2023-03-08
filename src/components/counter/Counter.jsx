import { useDispatch, useSelector } from 'react-redux';
import {
  decCounter,
  incCounter,
  randomCounter,
  resetCounter,
  setCounter,
} from '../../redux/counter/counterAction';

const Counter = ({ title }) => {
  // whatever in the redux store will be accessible by useSelector()
  const { counter } = useSelector((state) => state);

  // useDispatch() - allows get final value and can be used
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-2xl font-bold uppercase border-b-4 pb-2 mb-2 border-lime-600 text-white">{title}</h1>
      <h1 className="text-green-600 text-[7rem] font-bold"> {counter} </h1>
      <div className="btn-group mt-4">
        <button
          onMouseDown={() => dispatch(incCounter())}
          className="rounded-lg font-medium bg-transparent border border-blue-500 text-blue-700 hover:bg-emerald-600 hover:border-emerald-400 hover:text-white px-4 py-2 transition-all duration-200 text-xl"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decCounter())}
          className="rounded-lg font-medium bg-transparent border border-blue-500 text-blue-700 hover:bg-emerald-600 hover:border-emerald-400 hover:text-white px-4 py-2 transition-all duration-200 text-xl mx-3"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(resetCounter())}
          className="rounded-lg font-medium bg-transparent border border-blue-500 text-blue-700 hover:bg-emerald-600 hover:border-emerald-400 hover:text-white px-4 py-2 transition-all duration-200 text-xl"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch(setCounter())}
          className="rounded-lg font-medium bg-transparent border border-blue-500 text-blue-700 hover:bg-emerald-600 hover:border-emerald-400 hover:text-white px-4 py-2 transition-all duration-200 text-xl mx-3"
        >
          Set
        </button>
        <button
          onClick={() => dispatch(randomCounter())}
          className="rounded-lg font-medium bg-transparent border border-blue-500 text-blue-700 hover:bg-emerald-600 hover:border-emerald-400 hover:text-white px-4 py-2 transition-all duration-200 text-xl"
        >
          Random
        </button>
      </div>
    </>
  );
};

export default Counter;
