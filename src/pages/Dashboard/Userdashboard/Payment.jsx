import { loadStripe } from "@stripe/stripe-js";
import Cheakoutform from "./Cheakoutform";
import { Elements } from "@stripe/react-stripe-js";
import useOrder from "../../hooks/useHooks";

const stripePromise = loadStripe(`${import.meta.env.VITE_PUBLISHABLE_KEY}`);

const Payment = () => {
    const [orders] = useOrder()
    const total = orders?.reduce((sum,item)=> item.price + sum ,0)
    const totalPrice = parseFloat(total.toFixed(2))
    return (
        <div className="md:w-[500px] mx-auto">
            <h2 className="text-3xl text-center  text-bold text-white mb-10 ">
                Payment
            </h2>
          <Elements stripe={stripePromise}>
          <Cheakoutform price={totalPrice}></Cheakoutform>
          </Elements>
        </div>
    );
};

export default Payment;