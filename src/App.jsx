import { Outlet } from "react-router-dom";
import Nav from "./pages/Sharedfile/Navbar";
import Footer from "./pages/Sharedfile/Footer/Footer";
import Lottie from "lottie-react";
import preloader from '../public/131438-junk-food-animation-for-websoite.json'
import {useEffect, useState} from 'react'

const App = () => {
  const [preloaders,setpreloaders] = useState(true)
    useEffect(()=>{
      setTimeout(()=>{
        setpreloaders(false)
      },4000)
    },[])
    if(preloaders){
        return <div className="w-full h-screen relative flex justify-center items-center">
          <div className="w-[300px] mb-20">
            <Lottie animationData={preloader}/>
            </div>
            </div>
    }
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;