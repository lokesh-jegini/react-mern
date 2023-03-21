
import './App.css';
import { Task1 } from '../src/tasks/task1';
import { Ex2 } from './tasks/ex2';

import { Home } from '../src/tasks/home';
import {
  RouterProvider, createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet
} from 'react-router-dom';
import { Ex1 } from './tasks/ex1';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet/>}>
      <Route path="/Ex1" element={<Ex1 />} />
      <Route path="/ex2" element={<Ex2 />} />
      {/* <Route path="/task3" element={<Task3 />} /> */}
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
