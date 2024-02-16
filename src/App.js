import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ResetPassword from "./Pages/ResetPassword";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Aboutus from "./Pages/Aboutus";
import MayBeShowNavbar from "./Components/MayBeShowNavbar/MayBeShowNavbar";
import MayShowFooter from "./Components/MayShowFooter/MayShowFooter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MayBeShowNavbar>
          <Navbar />
        </MayBeShowNavbar>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/categories' element={<Categories/>} />
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path="/cart" element={<Cart/>} /> */}

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset" element={<ResetPassword />} />
        </Routes>

        <MayShowFooter>
          <Footer />
        </MayShowFooter>
      </BrowserRouter>
    </div>
  );
}

export default App;
