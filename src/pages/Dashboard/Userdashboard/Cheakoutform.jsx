/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Swal from 'sweetalert2'
import {CardElement,  useElements, useStripe} from '@stripe/react-stripe-js';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { AuthContext } from '../../../Firebase/Authprobider';
const Cheakoutform = ({price,cart}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [carderror,setcarderror] = useState('')
    const {user} = useContext(AuthContext)
    const token = localStorage.getItem('accesstoken')
    const [clientSecrets,setClientSecret] = useState('')
    const [proccesing,setProccesing] = useState(false)
    const[transactionId,settransectionId] = useState('')
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_URL}/create-payment-intent`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                authorization: `bearer ${token}`
                

            },
            body:JSON.stringify({prices:price})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setClientSecret(data.clientSecret)
        })
    },[token,price])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
    
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }

        console.log(card)

        
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })

        if (error) {
            console.log('[error]', error);
            setcarderror(error.message)
          } else {
            setcarderror('')
            console.log('[PaymentMethod]', paymentMethod);
          }

          setProccesing(true)
          const {paymentIntent, errors} = await stripe.confirmCardPayment(
            clientSecrets,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user?.displayName || 'anonymous',
                  email:user?.email || 'unknown'
                },
              },
            },
          );
          if(errors){
            console.log(errors)
          }
          console.log(paymentIntent)

          setProccesing(false)

          if(paymentIntent.status === 'succeeded'){
            const transecTionId = paymentIntent.id
            settransectionId(transecTionId)

            const payment = {
                email:user?.email,
                transecTionId:paymentIntent.id,
                price:price,
                quantity:cart.length,
                item:cart.map(items=>items._id),
                itemName:cart.map(items=>items.name),
                date:new Date()

            }
          
            fetch(`${import.meta.env.VITE_URL}/payments`,{
              method:'POST',
              headers:{
                  'Content-Type':'application/json',
                  authorization: `bearer ${token}`
                  
  
              },
              body:JSON.stringify(payment)
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data)
              if(data.insertedId){
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Payment complete',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
          })

          }
        }
    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe || !clientSecrets || proccesing}>
        Pay
      </button>
    </form>
     <div className='mt-8'>
        {
            carderror&&(
                <div>
                    <p className='text-red'>{carderror}</p>
                </div>
            )
        }
        {
          transactionId&&(
            <div>
                    <p className='text-green-600'>Payment Completed Successfully{transactionId}</p>
                </div>
          )
        }
     </div>
        </div>
    );
};

export default Cheakoutform;