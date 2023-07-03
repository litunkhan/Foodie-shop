import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Newitems = () => {
    const [newItem,setnewItem] = useState([])
    const [loadings,setLoadings] = useState(true)
    useEffect(()=>{
       fetch(`${import.meta.env.VITE_URL}/new-items`)
       .then(res=>res.json())
       .then(data=>{
        setLoadings(false)
        console.log(data)
        setnewItem(data)
       })
    },[])
    if(loadings){
        return <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-900"></div>
      </div>
      
    }
    return (
        <div className="py-10 mx-10 md:mx-20 bg-[#F8F7F2]">
            <h1 className="mt-4   font-bold text-4xl text-center">
       Our New Items
            </h1>
             {
                newItem.map(item=>{
                    return <div key={item._id} className="my-5 flex justify-between">
                   <div className="flex items-center gap-4">
                   <img className="w-11 h-11 rounded-full rounded-tl-none" src={item.image}
                  alt="food-image" /> 
                  <span>------------</span>
                   </div>
                
                  <span>  {item.name}------------</span>
                  <p>Price ${item.price}</p>
                 </div>
                    
                })
             }
             <Link to={'/menu'}>
             <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 animate-pulse hover:animate-none">
  Order Now
</button>

             </Link>
        </div>
    );
};

export default Newitems;