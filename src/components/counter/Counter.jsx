import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  // whatever in the redux store will be accessible by useSelector()
  const {counter} = useSelector((state) => state);

  // useDispatch() - allows get final value and can be used
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-3xl text-sky-500">Counter</h1>
      <h1 className="text-green-600 text-[7rem] font-bold"> {counter} </h1>
      <hr />
      <div className="btn-group mt-4">
        <button
          onClick={() => dispatch({ type: 'INC' })}
          className="rounded-lg font-medium bg-transparent border border-blue-500 text-blue-500 hover:bg-emerald-600 hover:border-emerald-400 hover:text-white px-4 py-2 transition-all duration-200 text-xl"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: 'DEC' })}
          className="rounded-lg font-medium bg-transparent border border-blue-500 text-blue-500 hover:bg-emerald-600 hover:border-emerald-400 hover:text-white px-4 py-2 transition-all duration-200 text-xl mx-3"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: 'RESET' })}
          className="rounded-lg font-medium bg-transparent border border-blue-500 text-blue-500 hover:bg-emerald-600 hover:border-emerald-400 hover:text-white px-4 py-2 transition-all duration-200 text-xl"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch({ type: 'SET' })}
          className="rounded-lg font-medium bg-transparent border border-blue-500 text-blue-500 hover:bg-emerald-600 hover:border-emerald-400 hover:text-white px-4 py-2 transition-all duration-200 text-xl mx-3"
        >
          Set
        </button>
        <button
          onClick={() => dispatch({ type: 'RANDOM' })}
          className="rounded-lg font-medium bg-transparent border border-blue-500 text-blue-500 hover:bg-emerald-600 hover:border-emerald-400 hover:text-white px-4 py-2 transition-all duration-200 text-xl"
        >
          Random
        </button>
      </div>
    </>
  );
};

export default Counter;
