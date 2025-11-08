import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../page/Home/Home';
import Login from '../page/login/Login';
import Register from '../page/Register/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
    ],
  },
]);
