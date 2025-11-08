import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router';
import { router } from './Router/Router.jsx';
import FirebaseContext from './Context/Firebase/FirebaseContext.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseContext>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </FirebaseContext>
  </StrictMode>
);
