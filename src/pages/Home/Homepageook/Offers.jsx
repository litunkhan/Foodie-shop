
import img1 from './img.png'
import img2 from './img2.png'
import img3 from './img3.png'
const Offers = () => {
    return (
        <div className="  flex flex-col justify-center md:gap-10 md:flex-row  items-center bg-white">
            <div className=' w-1/3'>
                <img src={img2} alt="image" />
                <h2 className='text-4xl font-bold'>
                BOOK YOUR TABLE NOW FOR THE BEST CHOW 
                </h2>
                <p>Indulge in our delectable offerings that span a variety of cuisines, from international classics to locally inspired delights. At Foodie Shop, we prioritize not just your appetite, but also your comfort and enjoyment. Our cozy and inviting atmosphere sets the stage for your perfect meal.</p>
                <img src={img3} alt="image" />
            </div>
            <img className='' src={img1} alt="image" />
        </div>
    );
};

export default Offers;