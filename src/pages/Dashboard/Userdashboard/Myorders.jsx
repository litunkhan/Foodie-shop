/* eslint-disable no-unused-vars */


import {Link} from 'react-router-dom'
// import Sectiontitle from "../../../component/sectiontitle/Sectiontitle";
import Swal from 'sweetalert2'
import useOrder from '../../hooks/useHooks';
const Myorders = () => {
    const [orders,refetch] = useOrder()
    const total = orders?.reduce((sum,item)=> item.price + sum ,0)
    console.log(total)
     
    const deleteHandle = (id)=>{
        console.log(id)
        fetch(`${import.meta.env.VITE_URL}/orders/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0) {
                refetch()
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Item deleted Succesfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            
        })
    }
    if(orders?.length === 0 ){
      return <div><h2 className='text-4xl text-white font-bold'>
        You Havent order anythigs
        </h2></div>
    }
    return (
        <div className='w-full h-screen mt-5 text-white text-center'>
            <div className="uppercase flex flex-col md:flex-row justify-between font-semibold">
         <p>Total Items: {orders.length}</p>
            <p className='text-2xl'>Total Price: ${total}</p>
           <Link to={'/dashboard/payment'}>
           <button className="bg-red-600 w-[80px] hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded">
  Pay
</button>
           </Link>
         </div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full mt-10">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Food</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
      {
        orders.map((row,index)=>{
            return <><tr>
            <td>
              {index+1}
            </td>
            <td>
              <div className="flex items-center justify-center">
                <div className="">
                  <div className=" ">
                    <img className='rounded-full  w-12 h-12' src={row.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
            
              {row.name}
            </td>
            <td>${row.price}</td>
            <td>
              <button onClick={()=>deleteHandle(row._id)} className="btn  btn-sm btn-error">Remove</button>
            </td>
          </tr>
          </>
        })
      }
     
      
     
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default Myorders;