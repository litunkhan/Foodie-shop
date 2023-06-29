


import { useContext } from 'react';
import useOrder from '../hooks/useHooks';
import useMenu from '../hooks/useMenu';
import banner from './GettyImages-food-habits-eating-personality-1200.jpg';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Firebase/Authprobider';
const Menu = () => {
  const [menu, loading, setsearch] = useMenu();
const[,refetch] = useOrder()
const {user} = useContext(AuthContext)
  
  const order = (orders)=>{
    console.log(orders)
    const orderItem = {
        name:orders.name,
        price:orders.price,
        image:orders.image,
        email:user.email,
        date:new Date()
    }
    fetch(`${import.meta.env.VITE_URL}/orders`,{
     method:'POST',
     headers:{
       'Content-Type':'application/json'
     },
     body:JSON.stringify(orderItem)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
         refetch()
         Swal.fire({
           position: 'center',
           icon: 'success',
           title: 'Order Added Successfull',
           showConfirmButton: false,
           timer: 1500
         })
        }
    })
 }
return (
    <>
      <div className="flex items-center justify-center h-[320px] bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
        <h1 className="text-4xl font-bold text-white">Order <span className='text-white'>Now</span></h1>
      </div>

      
        <div className="relative my-8 mx-auto max-w-sm">
          <input
            type="text"
            onChange={(e)=>setsearch(e.target.value)}
            placeholder="Search"
            className="border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:border-blue-500"
          />
        
        </div>
      
      {/* Render menu items here */}
      {loading&&(
        <div><h2 className='text-center font-bold text-2xl'>Loading...</h2></div>
      )}
      <div className='grid mb-6 gap-4 max-w-[1200px] mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
      {menu.map(foods=>{
       return <div key={foods._id}>
            <div className='overflow-hidden h-[250px]'>
            <img className='h-[250px] w-full mb-4 hover:scale-110 duration-700' src={foods.image} alt="food-image" />
            </div>
            <h2 className='my-5 text-3xl'>
                {foods.name}
            </h2>
            <p className='font-bold mb-3'>${foods.price}</p>
            <button 
            onClick={()=>{
               if(!user){
               return Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'You have to login frist',
                  showConfirmButton: false,
                  timer: 1500
                })
               }

               order(foods)
            }}
            className="bg-black text-white  hover:bg-white hover:text-black  font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
      
      Add
    </button>
       
       

        </div>
      })}
      </div>
    </>
  );
};

export default Menu;

