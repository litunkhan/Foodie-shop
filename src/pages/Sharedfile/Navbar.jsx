
import  { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineAlignCenter } from "react-icons/ai";

const Nav = () => {
    const user = null
    let Links =[
      {name:"Home",link:"/"},
      {name:"Menu",link:"/menu"},
      {name:"Contact",link:"/contact"},
      {name:user?'Myorder':'',link:"/myorder"},
    ];
   
    let [open,setOpen]=useState(false);
  return (
    <div className=' w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between  py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        
        </span>
        Designer
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <AiOutlineAlignCenter></AiOutlineAlignCenter>
      </div>

      <ul className={`md:flex  md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
    <NavLink to={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>
        {link.name}</NavLink>
            </li>
          ))
        }

        {
            !user? <Link to={'/login'}><button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
            duration-500'>
             Login
            </button></Link>:
            <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
            duration-500'>
             Logout
            </button>
        }
        
      </ul>
      </div>
    </div>
  )
}

export default Nav