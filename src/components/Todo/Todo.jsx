import { useEffect, useState } from 'react';
import { SlTrash } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { addAllTodo, deleteTodo, getAllTodo } from '../../redux/todo/todoAction';

const Todo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodo());
  }, [dispatch]);

  const [todo, setTodo] = useState('');

  const handleAdd = async () => {
    dispatch(addAllTodo(todo));
  };

  const { allTodo, loading } = useSelector((state) => state.todo);

  const handleDel = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <section className="max-w-screen-sm mx-auto shadow p-2">
      <div className="">
        <label class="leading-7 text-sm text-gray-600">Text</label>
        <input
          type="text"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Type your activity"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="mt-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add
        </button>
      </div>
      {loading && <h1>Im loading...</h1>}
      <h1 className="text-2xl font-bold uppercase border-b-4 pb-2 mb-2 border-lime-600 text-emerald-500">
        My todo list
      </h1>
      <ul>
        {allTodo &&
          allTodo.map(({ title, id, isDone }, i) => {
            return (
              <li className="flex justify-between align-middle text-2xl font-medium shadow-sm my-2" key={i}>
                <span className="font-normal text-sky-700">{id}</span>
                {title}
                <button onClick={() => handleDel(id)}>
                  <SlTrash className="text-2xl text-red-600" />
                </button>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Todo;
