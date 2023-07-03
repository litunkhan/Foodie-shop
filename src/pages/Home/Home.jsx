import Foodslider from "./HomeFoodslider/Foodslider";
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
        </>
    );
};

export default Home;