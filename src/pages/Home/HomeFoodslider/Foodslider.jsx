

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
    <div className=" pb-20  mt-[20px]  ">
        <h3 className="text-2xl text-center mb-8 font-bold text-black">Our Popular Items</h3>

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










