import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const UserhomeReviews = () => {
    const [reviews,setReviews] = useState([])
    
    const [load,setload] = useState(true)
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_URL}/get-reviews`)
        .then(res=> res.json())
        .then(data=>{
            
            setReviews(data)
            setload(false)
           
        })
    },[])

    if(load){
        return <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-900"></div>
      </div>
      
    }
    return (
        <div className="py-10 bg-[#F8F7F2]">
            <h2 className="text-center font-bold text-5xl mb-10">
                Our Customar Reviews!
            </h2>
            <Marquee >
                <div className="flex gap-5 ">
    {
        reviews.map(singlereview=>{
            return <div key={singlereview._id} className="max-w-[330px] px-8 h-[290px] shadow-lg py-5 flex flex-col justify-center items-center p-2 bg-white text-gray-900
            overflow-visible rounded-lg"  >
                <img className="rounded-full mt-[-30px] h-16 w-16 relative z-10" src={singlereview.image} alt="" />
                 <p className="text-center my-5">{singlereview.feedback}</p>
                 <p className=" text-2xl font-bold text-red-700">{singlereview.userName}</p>

                 <Rating
      style={{ maxWidth: 180 }}
      value={singlereview.rating}
      readOnly
    />
            </div>
        })
    }
    </div>
</Marquee>
        </div>
    );
};

export default UserhomeReviews;