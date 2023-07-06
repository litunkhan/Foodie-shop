
import Deveryfood from "./Delivery/Deveryfood";
import Foodslider from "./HomeFoodslider/Foodslider";
import UserhomeReviews from "./Reviews/UserhomeReviews";
import Herosection from "./herosections/Herosection";
import Newitems from "./newitems/Newitems";

const Home = () => {
    
    return (
        <>
        <Herosection></Herosection>
        <div className="">
            <Foodslider></Foodslider>
        </div>
        <Newitems/>
        <Deveryfood/>
        <UserhomeReviews/>
        </>
    );
};

export default Home;