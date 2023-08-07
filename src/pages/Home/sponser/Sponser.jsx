import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './4.png'
import img5 from './5.png'
import img6 from './6.png'

const Sponser = () => {
    return (
        <div className='py-20 bg-white md:pl-10'>
            <h2 className='text-center mb-6 font-bold text-5xl'>
            HIGHLY TRUSTED SPONSOR
            </h2>
           <div className='grid md:grid-cols-4 lg:grid-cols-6 '>
             <img className='cursor-pointer hover:scale-75 duration-500' src={img1} alt="logo" />
             <img className='cursor-pointer hover:scale-75 duration-500' src={img2} alt="logo" />
             <img className='cursor-pointer hover:scale-75 duration-500' src={img3} alt="logo" />
             <img className='cursor-pointer hover:scale-75 duration-500' src={img4} alt="logo" />
             <img className='cursor-pointer hover:scale-75 duration-500' src={img5} alt="logo" />
             <img className='cursor-pointer hover:scale-75 duration-500' src={img6} alt="logo" />
          </div> 
        </div>
    );
};

export default Sponser;
