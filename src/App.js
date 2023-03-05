import { RouterProvider } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
import myRoutes from './router/router';

function App() {
  return (
    <>
      {/* Set my router function to RouterProvider  */}
      <RouterProvider router={myRoutes} />
    </>
  );
}

export default App;
