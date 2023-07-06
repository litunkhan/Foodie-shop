import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import images1 from './jonathan-borba-8l8Yl2ruUsg-unsplash.jpg'
import images2 from './04.jpg'
import images3 from './02.jpg'
const Herosection = () => {
    return (
        <div className='relative  z-[-10] '>
             <Carousel
             showThumbs={false}
             autoPlay={true}
             infiniteLoop={true}
             transitionTime={8}>
              <div className=" h-[50vh] md:h-[100vh]">
              <img src={images3} alt="food-image" />
              </div>

                <div className=" h-[50vh] md:h-[100vh]">
                <img src={images2} alt="food-image" />
          </div>

    <div className=" h-[50vh] md:h-[100vh]">
    <img src={images1} alt="food-image" />
     </div>
           
            </Carousel>
        </div>
    );
};

export default Herosection;