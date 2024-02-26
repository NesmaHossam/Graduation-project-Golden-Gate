import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Aboutus from "./Pages/Aboutus";
import MayBeShowNavbar from "./Components/MayBeShowNavbar/MayBeShowNavbar";
import MayShowFooter from "./Components/MayShowFooter/MayShowFooter";
import ConfirmationPassword from "./Components/ConfirmationPassword/ConfirmationPassword";
import ResetPassword from "./Pages/ResetPassword";
import ConfirmationCode from "./Components/ConfirmationCode/ConfirmationCode";
import CoursePlay from "./Pages/CoursePlay";
import CourseContent from "./Components/CourseContent/CourseContent";
import CourseVideo from "./Components/CourseVideo/CourseVideo";
import OverView from "./Components/OverView/OverView";
import Comments from "./Components/Comments/Comments";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MayBeShowNavbar>
          <Navbar />
        </MayBeShowNavbar>

        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path='/categories' element={<Categories/>} />
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path="/cart" element={<Cart/>} /> */}

          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/reset" exact element={<ConfirmationPassword />} />
          <Route path="/confirmCode" exact element={<ConfirmationCode />} />
          <Route path="/newpass/:id" exact element={<ResetPassword />} />
          <Route path="/coursePlay" exact element={<CoursePlay />} />
          <Route path="/courseContent" exact element={<CourseContent/>} />
          <Route path="/courseVideo" exact element={<CourseVideo/>} />
          <Route path="/overView" exact element={<OverView/>}/>
          <Route path="/comments" exact element={<Comments/>} />

        </Routes>

        <MayShowFooter>
          <Footer />
        </MayShowFooter>
      </BrowserRouter>
    </div>
  );
}

export default App;
