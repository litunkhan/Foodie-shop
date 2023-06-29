import { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../Firebase/Authprobider";
import { AiFillLeftSquare,AiFillRightSquare} from "react-icons/ai";
import useAdmin from "../hooks/useAdmin";



const Dashboard = () => {
    // const admin = true
    const[open,setopen] = useState(false)
    const {user} = useContext(AuthContext)
    const [admin,isAdminLoading] = useAdmin()

    if(isAdminLoading){
      return <div><p>Loading...</p></div>
    }
    return (
      <>
       <div className="h-11  rounded-sm bg-white flex items-center">
            {
                open?<AiFillLeftSquare
                className="text-5xl bg-none cursor-pointer"
                onClick={()=>{
                   setopen(!open)
                   console.log(open)
               }}
               ></AiFillLeftSquare>:
               <AiFillRightSquare
               className="text-5xl bg-none cursor-pointer"
                onClick={()=>{
                   setopen(!open)
                   console.log(open)
               }}
               ></AiFillRightSquare>
            }
             <div className=' text-2xl cursor-pointer font-semibold  font-[Poppins] 
      text-black   '>
        Foodie-<span className='text-orange-500 font-semibold'>Restaurent</span>
      </div>
           
      <img className="h-10 w-10 rounded-full mr-1 ml-auto" src={user?.photoURL} alt="" />

        </div>
        <div className="bg-[#343541] pt-0 min-h-[100vh] p-10 flex flex-col md:flex-row">
        <div className={open?'ml-[-355px] duration-500':'ml-0 duration-500 relative '}>
        <ul className="menu  p-4 w-80 bg-white/10 backdrop-filter backdrop-blur-lg min-h-[86vh]   text-base-content md:pt-12 text-white">
      
      {
        admin.admin?<>
       {console.log(admin.admin)}
  <li className="mb-2 "><NavLink to={'adminhome'}
       className={({ isActive, isPending }) =>
       isPending ? "pending" : isActive ? "text-white" : ""}
      ><i className="fas fa-home"></i>Admin home</NavLink></li>
  
      <li className="mb-2"><NavLink to={'additem'}
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-white" : ""}
      ><i className="fas fa-utensils"></i>Add Items</NavLink></li>
  
      <li className="mb-2"><NavLink to={'manageitem'}
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-white" : ""}
      ><i className="fa-solid fa-pen-to-square"></i>
        Manage Items</NavLink></li>
  
      <li className="mb-2">
        <NavLink to={'reservation'}
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "text-white" : ""}
      ><i className="fa-solid fa-book-open-reader"></i>
      Manage Booking</NavLink></li>
  
      <li className="mb-2"><NavLink to={'alluser'}
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-white" : ""}
      ><i className="fa-sharp fa-solid fa-users"></i>
      All users</NavLink></li>
           
        </>:<>
  
        <li className="mb-2"><NavLink to={'userhome'}
       className={({ isActive, isPending }) =>
       isPending ? "pending" : isActive ? "text-white" : ""}
      ><i className="fas fa-home"></i>User home</NavLink></li>
  
      <li className="mb-2"><NavLink to={'myorder'}
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-white" : ""}
      ><i className="fas fa-shopping-cart"></i>My order</NavLink></li>
  
      <li className="mb-2"><NavLink to={'paymenthistory'}
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-white" : ""}
      ><i className="fas fa-history"></i>
      Payment history</NavLink></li>
  
      <li className="mb-2 "><NavLink to={'reservation'}
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "text-white" : ""}
      ><i className="fas fa-calendar-alt"></i>
      Reservation</NavLink></li>
  
      <li className="mb-2"><NavLink to={'reviews'}
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-white" : ""}
      ><i className="fas fa-star"></i>
      Reviews</NavLink></li>
        
        </>
      }
  
      <hr  className="bg-white my-10 h-[2px]"/>
  
  
      <li className="mb-2">
      <NavLink to={'/'}><i className="fas fa-home"></i>
      Home</NavLink>
      </li>
      <li className="mb-2">
      <NavLink to={'/menu'}><i className="fas fa-utensils"></i>
      Menu</NavLink>
      </li>
      <li className="mb-2">
      <NavLink to={'/order/salad'}><i className="fas fa-shopping-bag"></i>
      Orders</NavLink>
      </li>
      
        
      </ul>
       
        </div>
        
         <Outlet></Outlet>
        </div>
        </>
            

    );
};

export default Dashboard;