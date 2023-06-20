import { Outlet } from "react-router-dom";
import Nav from "./pages/Sharedfile/Navbar";
import Footer from "./pages/Sharedfile/Footer/Footer";


const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;