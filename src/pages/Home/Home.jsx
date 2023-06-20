import Foodslider from "./HomeFoodslider/Foodslider";
import Herosection from "./herosections/Herosection";


const Home = () => {
    return (
        <>
        <Herosection></Herosection>
        <div className="mt-10">
            <Foodslider></Foodslider>
        </div>
        </>
    );
};

export default Home;