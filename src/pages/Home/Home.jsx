import Foodslider from "./HomeFoodslider/Foodslider";
import Herosection from "./herosections/Herosection";


const Home = () => {
    return (
        <>
        <Herosection></Herosection>
        <div className="">
            <Foodslider></Foodslider>
        </div>
        </>
    );
};

export default Home;