import { RouterProvider } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
import myRoutes from './router/router';

export const App = () => {
  return (
    <>
      {/* Set my router function to RouterProvider  */}
      <RouterProvider router={myRoutes} />
    </>
  );
}
