
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 
"react-icons/ai";


const Contactform = () => {
  
  const user = null
    return (
        <div className="bg-[f8f7f2] mt-4 md:gap-4 max-w-[1000px] mx-auto py-[20px] flex flex-col md:justify-between md:flex-row">
            <div className="w-full md:w-2/3">
                <h1 className="text-2xl font-bold text-black mb-[25px]">
                We’d Love to Hear From You, Please Let Us Know
                </h1>
                <hr className="h-[3px] w-[60px] rounded bg-black mb-5" />
                <p className="text-gray-500">
                Foodie-Restaurant is a popular eatery that caters to food enthusiasts with a diverse range of fast food options. From juicy burgers to crispy fries and mouthwatering pizzas, this restaurant offers a delightful selection of all your favorite fast foods.
                </p>

                <div className="mt-10">
    <form action='https://formspree.io/f/mknadazq'
     method="POST" className=" bg-white p-6 rounded shadow-md ml-[-18px]">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          name='username'
          type="text"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          name='email'
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          name="message"
          rows="7"
          placeholder="Enter your message"
        ></textarea>
      </div>
      <button
      disabled={!user}
     className="bg-black w-[100px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Send
      </button>
    </form>
                </div>
            </div>
            <div className="border-x-4 md:w-1/3 md:h-[600px] pt-16">
              <p className="text-1xl text-center font-bold">ADDRESS</p>
              <ul className="mt-8 pl-2">
                 <li>732/21 Second Street,</li>
                 <li>House 1 Rd No. 7, Dhaka 1207</li>
                 <li>BD Dhaka Mirpur</li>
              </ul>
              <hr className="h-[3px] my-5 w-full bg-gray-500"/>
              <p className="text-1xl font-bold text-center">OPEN HOURS</p>
              <ul className="mt-8 pl-2">
               <li>Mon-Fri.........08:00-12:00</li>
               <li>Saturday.........08:00-18:00</li>
               <li>Sunday..........08:00-18:00</li>
              </ul>

              <hr className="h-[3px] my-5 w-full bg-gray-500"/>
              <p className="text-1xl font-bold text-center">Find us on</p>
              <div className="mt-8 pl-2">
              <div className="flex gap-2 justify-center">
            <AiFillFacebook className="text-5xl"></AiFillFacebook>
            <AiFillInstagram className="text-5xl"></AiFillInstagram>
            <AiFillTwitterCircle className="text-5xl"></AiFillTwitterCircle>
            <AiFillYoutube className="text-5xl"></AiFillYoutube>
           
        </div>
        <p className="1xl font-fond bg-black rounded-sm text-white text-center ">Email: litun@gmail.com</p>
              </div>
            </div>
            
        </div>
    );
};

export default Contactform;