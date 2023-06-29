
import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import Swal from 'sweetalert2'




const Manageitem = () => {
    const [page,setpage] = useState(1)
    const token = localStorage.getItem('accesstoken')
    const {data: menu =[],refetch} = useQuery(['menu'],async()=>{
         const res = await fetch(`${import.meta.env.VITE_URL}/menu`,{
            headers:{
                authorization: `bearer ${token}`
              },
         })
         return res.json()

    })
    
    const menuPage = Math.ceil(menu.length / 8)
    const seletedPage = (pagess)=>{
         setpage(pagess)
    }
    const deleteItem = (id)=>{
      
       fetch(`${import.meta.env.VITE_URL}/menus/${id}`,{
        method:'DELETE',
        headers:{
          authorization: `bearer ${token}`
        },

       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
         if(data.deletedCount > 0){
           refetch()
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Item Added Successfully',
            showConfirmButton: false,
            timer: 1500
          })
         }
       })
    }
    return (
        <div  className="w-full h-screen">
           
            <p>Total Items{menu.length}</p>
            <table className="table w-full mt-10 text-center text-white">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Food</th>
        <th>Name</th>
        <th>Price</th>
        <th>Edit</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
    
      {
        menu?.slice(page*8-8, page * 8).map((row,index)=>{
            console.log(page)
            return <><tr>
            <td>
              {index+1}
            </td>
            <td>
              
            <div className="flex justify-center items-center">
            <img className="w-12 h-12 rounded-full" src={row.image} alt="food-image" />
            </div>
                 
            </td>
            <td>
            
              {row.name}
            </td>
            <td>${row.price}</td>
            <td className="cursor-pointer">
              <button className="btn btn-sm btn-warning"><i className="fa-sharp fa-solid fa-pen-to-square"></i></button>
            </td>
            <td className="text-2xl ">
           <button onClick={()=>deleteItem(row._id)}  className="btn btn-sm btn-error">
           <i className="fa-solid fa-delete-left text-1xl  "></i>
            </button> 
            </td>
          </tr>
          </>
        })
      }
     
      
     
    </tbody>
   
  </table>
        {menu.length > 0 && (
            
                
            <div className="w-[400px] mt-4 mx-auto flex gap-4">

                
                    {Array.from({ length: menuPage }).map((_, i) => {
                        return <button onClick={()=>seletedPage(i+1)} key={i} className="join-item btn">{i + 1}</button>;
                      })}
                
            </div>
                
    
        )}
        </div>
    );
};

export default Manageitem;