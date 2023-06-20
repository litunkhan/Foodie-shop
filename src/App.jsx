import { Outlet } from "react-router-dom";
import Nav from "./pages/Sharedfile/Navbar";


const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default App;