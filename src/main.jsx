import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import Home from './pages/Home/Home';
import LoginPage from './pages/Login/Loginpage';
import RegistrationPage from './pages/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App> ,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<LoginPage></LoginPage>
      },
      {
        path:'/registration',
        element:<RegistrationPage></RegistrationPage>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
           <RouterProvider router={router} />
  </React.StrictMode>,
)
