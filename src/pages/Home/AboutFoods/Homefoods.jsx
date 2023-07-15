import image1 from './pizza-shop-img-01.jpg'
import image2 from './eating.jpg'
import image3 from './pizza-img-01.png'
import vegimage from './veg-img-01.png'
import write from './pi.png'
import logo1 from './1.png'
import logo2 from './2.png'
import logo3 from './3.png'
import logo4 from './4.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Homefoods = ()=>{
    useEffect(() => {
        AOS.init();
      }, [])
    
      return (
        <div className=''>
        <div className=' py-10  gap-10 md:h-screen  flex flex-col items-center md:flex-row md:px-20'>
    
            <div className="flex flex-col md:flex-row  gap-6 items-center w-full">
            <img className='rounded-3xl' src={image1} alt="food-shop-image" />
              <div>
                <img className='mb-8' src={vegimage} alt="" />
              <img className='rounded-3xl'  src={image2} alt="eating-pizza" />
              <img  data-aos="zoom-in-down" data-aos-duration="3000" className="-mt-14" src={image3} alt="" />
              </div>
            </div>
    
            <div className=" md:w-[800px] md:pt-6">
                <img src={write} alt="" />
                <h2 className=' text-4xl md:text-5xl font-bold  mb-10'>
                We Make The Best
    Food Restaurant
                </h2>
                <p className='my-6 text-[17px]'>
                We provide you with complete meal prep which includes the prepackaged necessary ingredients for a divine dinner as well as an easy to follow recipe
                </p>
    
                <div className=" grid grid-cols-2">
               <div className="flex gap-3 items-center">
               <img className='rounded-full h-16 w-16 ' src={logo1} alt="" />
               <p>Fresh Food</p>
               </div>
               <div className="flex gap-3 items-center">
               <img className='rounded-full h-16 w-16' src={logo2} alt="" />
               <p>Fast Delivery</p>
               </div>
               <div className="flex gap-3 items-center mt-7">
               <img className='rounded-full h-16 w-16 ' src={logo3} alt="" />
               <p>Quality Maintain</p>
               </div>
               <div className="flex gap-3 items-center mt-7">
               <img className='rounded-full h-16 w-16' src={logo4} alt="" />
               <p>24/7 Service</p>
               </div>
                </div>
    
                <button className='w-[170px] mt-5 bg-yellow-500 py-3 rounded-3xl cursor-pointer p-6 text-white
                hover:bg-[#B80818] duration-100'> Order-Now</button>
            </div>
        </div>
        
        </div>
  )
}

export default Homefoods