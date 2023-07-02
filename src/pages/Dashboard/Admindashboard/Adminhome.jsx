import { useContext } from "react";
import { AuthContext } from "../../../Firebase/Authprobider";
import { useQuery } from "@tanstack/react-query"

const Adminhome = () => {
    const {user} = useContext(AuthContext)
    const token = localStorage.getItem('accesstoken')
    const {data:stats={}} = useQuery({
        queryKey: ['admin_stats'],
        queryFn: async ()=>{
            const res = await fetch(`${import.meta.env.VITE_URL}/admin-stats`,{
                headers:{
                    authorization: `bearer ${token}`
                }
            })
             return res.json()
        }
      })
      
    
    return (
        <div className="w-full">
            <h1 className="text-center text-white text-2xl font-bold">Hello Welcome-{user?.displayName}</h1>

            <div className="grid mt-11 md:ml-6 gap-4 md:grid-cols-3 lg:grid-cols-4 text-white">
              <div className="bg-pink-400 h-28 flex justify-center items-center rounded-md gap-7">
              <i className="fa-sharp fa-solid fa-money-bill-wave text-3xl"></i>
              <span className="text-3xl">${stats.revenue}</span>
              </div>

              <div className="bg-orange-200 h-28 flex justify-center items-center rounded-md gap-7">
              <i className="fa-solid fa-users text-3xl"></i>
              <span className="text-3xl">{stats.users}</span>
              </div>

              <div className="bg-zinc-700 h-28 flex justify-center items-center rounded-md gap-7">
              <i className="fas fa-utensils text-3xl"></i>
              <span className="text-3xl">{stats.products}</span>
              </div>

              <div className="bg-lime-600 h-28 flex justify-center items-center rounded-md gap-7">
              <i className="fa-sharp fa-solid fa-cash-register text-3xl"></i>
              <span className="text-3xl">{stats.orders}</span>
              </div>
            </div>
        </div>
    );
};

export default Adminhome;