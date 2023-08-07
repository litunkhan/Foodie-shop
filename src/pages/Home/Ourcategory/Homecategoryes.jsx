import img1 from './c1.png'
import img2 from './c2.png'
import img3 from './c3.png'
import img4 from './c4.png'


const Homecategoryes = () => {
    return (
        <div className='py-20 bg-white md:pl-10'>
            <h2 className='text-center mb-6 font-bold text-5xl'>
            Choose a Category
            </h2>
           <div className='grid md:grid-cols-4  '>
            <div className='text-center'>
         <img className='cursor-pointer hover:scale-75 duration-500' src={img1} alt="logo" />
         <h3 className='text-4xl font-bold'>Organic Food</h3>
             </div>
            <div className='text-center'>
            <img className='cursor-pointer hover:scale-75 duration-500' src={img2} alt="logo" />
            <h3 className='text-4xl font-bold'>Zinger Burgers</h3>
            </div>

            <div className='text-center'>
            <img className='cursor-pointer hover:scale-75 duration-500' src={img3} alt="logo" />
            <h3 className='text-4xl font-bold'>Grill Food</h3>
            </div>
             
             <div className='text-center'>
            <img className='cursor-pointer hover:scale-75 duration-500' src={img4} alt="logo" />
            <h3 className='text-4xl font-bold'>BBQ Set</h3>
            </div>
          </div> 
        </div>
    );
};

export default Homecategoryes;