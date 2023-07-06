
import Lottie from "lottie-react";
import fooddelivery from './92163-food-courier.json'
import images from './d.png'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import banner from './chef-service.jpg'
const Deveryfood = () => {
    return (
        <>
      <div className="max-w-[1200px]  mx-auto relative z-10">
   <div className="h-[200px] bg-center rounded-lg bg-fixed bg-cover"style={{ backgroundImage: `url('${banner}')` }}></div>
  <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
  <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center">
    <h2 className="text-4xl font-bold text-white mr-2 mb-2 md:mb-0">
    Get 10% off your order!
    </h2>
  <input
          type="Email"
          className="w-[90%] md:w-[390px] text-white text-1xl  bg-transparent border-2 border-white rounded-full p-2"
          placeholder="Enter Email"
        />
  </div>
   </div>
        <div className="  md:-mt-20 h-[220vh] py-10 md:py-0  md:h-[125vh] bg-[#B80818] flex flex-col gap-20 md:justify-between items-center md:flex-row md:px-24">
            <div className="bg-yellow-400 rounded-full h-[53%] md:h-[420px] w-[88%] md:w-[50%] ">
            <Lottie className="relative " animationData={fooddelivery}/>
            </div>
            <div className="">
                 <img src={images} alt="" />
                    <h2 className="text-white font-bold text-6xl">Your Favorite Pizza,
                 on the Way!</h2>
                 <p className=" mt-6 text-white">
                 From signature delights such as beef tartare and the best mashed potato in Paris, all the way to unique specialities.

                 </p>
                 <div className="grid gap-3 mt-1 grid-cols-2  md:grid-cols-3">
                    <img className="w-[200px] h-[190px]" src={img1} alt="imag-1" />
                    <img className="w-[195px] h-[176px] mt-1" src={img2} alt="image2" />
                    <img className="w-[195px] h-[170px] mt-2" src={img3} alt="image3" />
                 </div>
            </div>
        </div>
        </>
    );
};

export default Deveryfood;