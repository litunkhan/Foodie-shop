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
import Manageitem from './pages/Dashboard/Admindashboard/Manageitem';
import Menu from './pages/Menu/Menu';
import Myorders from './pages/Dashboard/Userdashboard/Myorders';
import Privateroute from './pages/Privateroutes/Privatesroute';
import Payment from './pages/Dashboard/Userdashboard/Payment';
import Adminhome from './pages/Dashboard/Admindashboard/Adminhome';
import Userhome from './pages/Dashboard/Userdashboard/Userhome';
import Reviewsection from './pages/Dashboard/Userdashboard/Reviewsection';
import Paymenthistory from './pages/Dashboard/Userdashboard/Paymenthistory';
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
        path:'/menu',
        element:<Menu></Menu> 
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
    element:<Privateroute><Dashboard></Dashboard></Privateroute>,
    children:[
       {
         path:'additem',
         element:<Additem></Additem>
       },
       {
        path:'alluser',
        element:<Alluser></Alluser>
       },
       {
         path:'adminhome',
         element:<Adminhome/>
       },
       {
        path:'manageitem',
        element:<Manageitem></Manageitem>
       },
       {
         path:'myorder',
         element:<Myorders></Myorders>
       },
       {
         path:'userhome',
         element:<Userhome/>
       },
       {
          path:'review',
          element:<Reviewsection/>
       },
       {
         path:'paymenthistory',
         element:<Paymenthistory/>
       },
       {
        path:'/dashboard/payment',
        element:<Payment></Payment>
       },
      
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
