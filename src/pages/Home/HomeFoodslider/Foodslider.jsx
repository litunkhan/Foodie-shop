

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from './download.jpg';
 import slide_image_2 from './images2.jpg';
import slide_image_3 from './images3.jpg';
import slide_image_4 from './images4.jpg';
import slide_image_5 from './images5.jpg';
import slide_image_6 from './images6.jpg';
import slide_image_7 from './images7.jpg';




const Foodslider = ()=> {
    
  return (
<div className=" pb-10  mt-[0px] bg-[#F8F7F2] pt-9 md:flex justify-center md:items-center flex-col md:flex-row ">
  <div className="md:w-2/4">
<h3 className="text-5xl mb-5 text-left font-sans] md:ml-12     font-bold text-black ">
The Specialty of <br></br>The House</h3>
<p className="md:ml-14">Discover the unparalleled Specialty of the House at Foodie-Restaurant: the Deluxe Chicken Sandwich. Succulent grilled chicken,  Savor the explosion of flavors with our side of Sweet Potato Fries, </p>
<button className="bg-orange-600 mt-5 md:ml-14 text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded-md w-[160px] transition-all duration-300 hover:border-2 hover:border-orange-500 hover:translate-y-1">
      Order Now
    </button>
</div>
      <Swiper
        effect={"coverflow"}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={-150}
        grabCursor={true}
       
        pagination={{ clickable: true }}
        
         coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth:300,
            modifier: 2.5,
          }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        
      >
         <SwiperSlide>
          <img className="h-[330px] w-[280px]" src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img className="h-[330px] w-[280px]" src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[330px] w-[280px]"  src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[330px] w-[280px]"  src={slide_image_5} alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide>
          <img className="h-[330px] w-[280px]"  src={slide_image_2} alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide>
          <img className="h-[330px] w-[280px]"  src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className="h-[330px] w-[280px]"  src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

        

        
       
       
      </Swiper>
      
    </div>
  );
}

export default Foodslider










