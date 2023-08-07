
import useTitle from "../hooks/useTitle";
import Homefoods from "./AboutFoods/Homefoods";
import Deveryfood from "./Delivery/Deveryfood";
import Foodslider from "./HomeFoodslider/Foodslider";
import Offers from "./Homepageook/Offers";
import Homecategoryes from "./Ourcategory/Homecategoryes";
import Weprovide from "./Provide/Weprovide";
import UserhomeReviews from "./Reviews/UserhomeReviews";
import Herosection from "./herosections/Herosection";
import Newitems from "./newitems/Newitems";
import Sponser from "./sponser/Sponser";

const Home = () => {
       useTitle('Home')
    return (
        <div className="">
        <Herosection></Herosection>
        <div className="">
            <Foodslider></Foodslider>
        </div>
        <div className="bg-[#F7F1E8]">
        <Newitems/>
        <Homefoods/>
        <Deveryfood/>
        <Homecategoryes></Homecategoryes>
        <Offers></Offers>
        <Sponser></Sponser>
        <Weprovide></Weprovide>
        <UserhomeReviews/>
        </div>
        </div>
    );
};

export default Home;