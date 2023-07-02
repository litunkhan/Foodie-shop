import { useContext } from "react";
import { AuthContext } from "../../../Firebase/Authprobider";


const Userhome = () => {
    const {user} = useContext(AuthContext)
    
    return (
        <div className="w-full">
            <h1 className="text-center text-white text-2xl font-bold">Hello Welcome-{user?.displayName}</h1>
        </div>
    );
};

export default Userhome;