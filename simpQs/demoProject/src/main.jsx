import React from 'react'
import ReactDOM from 'react-dom/client'
import ForgotPass from './components/ForgotPass'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from './App'
import Todo from './components/Todo';
import Lock from './components/Lock';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Lock/>,
      }, {
        path: "/forgotPass",
        element: <ForgotPass />
      }, {
        path: "/todo",
        element: <Todo />
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
