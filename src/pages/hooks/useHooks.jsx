/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query'
import {useContext} from 'react'
import { AuthContext } from '../../Firebase/Authprobider'
const useOrder = () =>{
const {user} = useContext(AuthContext)
const token = localStorage.getItem('accesstoken')
    const { refetch, isError, data:orders=[], error } = useQuery({
        queryKey: ['orders',user?.email],
        queryFn: async ()=>{
            const res = await fetch(`${import.meta.env.VITE_URL}/orders?email=${user?.email}`,{
                headers:{
                    authorization: `bearer ${token}`
                }
            })
             return res.json()
        }
      })
      return [orders,refetch]

}

export default useOrder