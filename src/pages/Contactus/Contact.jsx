
import useTitle from '../hooks/useTitle';
import Contactform from './Contactform';
import image from './l-intro-1670029550.jpg'
const Contact = () => {
  useTitle('Contact')
    return (
        <>
        <div className="flex items-center justify-center  h-[290px] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      <h1 className="text-4xl font-bold text-black">Contact <span className='text-white'>Us</span></h1>
    </div>
    <Contactform></Contactform>
    <div className='mt-10'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29200.9568454091!2d90.34211205913569!3d23.814345544171115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c166c4cf7c2b%3A0x38c899746ecfeeac!2sDelicious%20Cuisine%20Mirpur%2010!5e0!3m2!1sen!2sbd!4v1687335760110!5m2!1sen!2sbd" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
    </div>
    </>
    );
};

export default Contact;