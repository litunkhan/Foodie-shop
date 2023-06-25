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
import Authprobider from './Firebase/Authprobider';
import Contact from './pages/Contactus/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import Additem from './pages/Dashboard/Admindashboard/Additem';
import Alluser from './pages/Dashboard/Admindashboard/Alluser';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

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
        path:'/contact',
        element:<Contact></Contact>
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
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
       {
         path:'additem',
         element:<Additem></Additem>
       },
       {
        path:'alluser',
        element:<Alluser></Alluser>
       }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
           <Authprobider>
           <QueryClientProvider client={queryClient}>
           <RouterProvider router={router} />
           </QueryClientProvider>
           </Authprobider>
  </React.StrictMode>,
)
