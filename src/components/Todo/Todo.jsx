import { useEffect } from 'react';
import { SlTrash } from 'react-icons/sl';
import { useDispatch } from 'react-redux';
import { getAllTodo } from '../../redux/todo/todoAction';

const Todo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodo());
  });
  return (
    <section className="max-w-screen-sm mx-auto">
      <h1 className="text-2xl font-bold uppercase border-b-4 pb-2 mb-2 border-lime-600 text-emerald-500">
        My todo list
      </h1>
      <ul>
        <li className="flex justify-between align-middle text-2xl font-medium shadow-sm my-2">
          <span className="font-normal text-sky-700">1 </span>
          Static value
          <button>
            <SlTrash className="text-2xl text-red-600" />
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Todo;
