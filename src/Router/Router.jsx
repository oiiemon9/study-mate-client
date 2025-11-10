import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../page/Home/Home';
import Login from '../page/login/Login';
import Register from '../page/Register/Register';
import FindPartners from '../page/FindPartners/FindPartners';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import CreatePartnerProfile from '../page/CreatePartnerProfile/CreatePartnerProfile';
import MyConnections from '../page/MyConnections/MyConnections';
import PartnerInfo from '../page/PartnerInfo/PartnerInfo';
import Error from '../components/Error/Error';
import Profile from '../page/Profile/Profile';

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
        path: '/find-partners',
        errorElement: <Error></Error>,
        Component: FindPartners,
      },
      {
        path: '/create-partner-profile',
        element: (
          <PrivateRoute>
            <CreatePartnerProfile></CreatePartnerProfile>
          </PrivateRoute>
        ),
      },
      {
        path: '/my-connections',
        element: (
          <PrivateRoute>
            <MyConnections></MyConnections>
          </PrivateRoute>
        ),
      },
      {
        path: '/my-profile',
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: '/partner/:id',
        element: (
          <PrivateRoute>
            <PartnerInfo></PartnerInfo>
          </PrivateRoute>
        ),
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
  {
    path: '/*',
    element: <Error></Error>,
  },
]);
