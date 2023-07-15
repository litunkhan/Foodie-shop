import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../Firebase/Authprobider";
import { useState } from "react";
import moment from 'moment';

const Paymenthistory = () => {
const {user} = useContext(AuthContext)
const token = localStorage.getItem('accesstoken')
const [historyofpayment,sethistoryOfPayment] = useState([])
    useEffect(()=>{
       fetch(`${import.meta.env.VITE_URL}/all-payments?email=${user?.email}`,{
        method:'GET',
        headers:{
            authorization: `bearer ${token}`
        }
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        sethistoryOfPayment(data)
       })
    },[user,token])
      if(historyofpayment.length<=0){
        return <div className="w-full text-center text-5xl text-white">You dont have any payments Yet</div>
      }
    return (
        <div className="md:mx-5 grid md:grid-cols-3 gap-5">
        {historyofpayment.map(singlepayments => (
          <div
            key={singlepayments._id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg h-[270px]"
          >
            <p className="text-center text-white text-3xl mb-[-10px] mt-10">
              {moment(singlepayments.date).format('MMMM Do YYYY')}
            </p>
            <p className="mt-5 text-white text-1xl">
              Total ${singlepayments.price} and Quantity {singlepayments.quantity}
            </p>
            <div className="mt-4">
              {singlepayments.itemName.map((items, index) => (
                <div key={index} className="text-white">
                  <p>{items}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
};

export default Paymenthistory;