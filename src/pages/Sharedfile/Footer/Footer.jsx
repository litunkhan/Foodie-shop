import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import ItemsContainer from "./ItemsContainer";

// import { Icons } from "./Menus";

const Footer = () => {
  return (
    
    <footer className="bg-gray-950   text-white">
      <hr className="bg-green-950 h-[2px]"></hr>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-600 bg-[#F8F7F2] text-sm pb-8"
      >
        <span>© {new Date().getFullYear()} Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="flex gap-2">
            <AiFillFacebook ></AiFillFacebook>
            <AiFillInstagram></AiFillInstagram>
            <AiFillTwitterCircle></AiFillTwitterCircle>
        </div>
      </div>
    </footer>
  );
};

export default Footer;