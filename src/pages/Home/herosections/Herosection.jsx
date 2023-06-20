import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import images1 from './burger.jpg'
import images2 from './pizza.jpg'
import images3 from './saladwinsbanner.jpg'
const Herosection = () => {
    return (
        <div className='relative  z-[-10] '>
             <Carousel
             showThumbs={false}
             autoPlay={true}
             infiniteLoop={true}
             transitionTime={8}>
                <div>
                    <img className='h-[100vh]' src={images1} alt='image-1'/>
                    
                </div>
                <div>
                    <img className='h-[100vh]'  src={images2}alt='image-2' />
                    
                </div>
                <div>
                    <img className='h-[100vh]' src={images3}alt='image-3' />
                   
                </div>
            </Carousel>
        </div>
    );
};

export default Herosection;