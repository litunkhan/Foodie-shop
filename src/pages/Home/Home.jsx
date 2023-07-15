
import useTitle from "../hooks/useTitle";
import Homefoods from "./AboutFoods/Homefoods";
import Deveryfood from "./Delivery/Deveryfood";
import Foodslider from "./HomeFoodslider/Foodslider";
import UserhomeReviews from "./Reviews/UserhomeReviews";
import Herosection from "./herosections/Herosection";
import Newitems from "./newitems/Newitems";

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
        <UserhomeReviews/>
        </div>
        </div>
    );
};

export default Home;