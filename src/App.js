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
import Rooms from "./Components/Rooms/Rooms";
import Profile from "./Pages/Profile";
import ProfilePicture from "./Components/ProfilePicture/ProfilePicture";
import MyCourses from "./Components/MyCourses/MyCourses";
import Password from "./Components/Password/Password";
import EmailAddress from "./Components/EmailAddress/EmailAddress";
import HelpAndSupport from "./Components/HelpAndSupport/HelpAndSupport";
import Logout from "./Components/LogOut/Logout";




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
            <Route path="/courseContent" exact element={<CourseContent />} />
            <Route path="/courseVideo" exact element={<CourseVideo />} />
            <Route path="/overView" exact element={<OverView />} />
            <Route path="/comments" exact element={<Comments />} />
            <Route path="/room" exact element={<Rooms />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/profilePic" exact element={<ProfilePicture />} />
            <Route path="/myCourses" exact element={<MyCourses />} />
            <Route path="/password" exact element={<Password />} />
            <Route path="/emailAddress" exact element={<EmailAddress />} />
            <Route path="/helpSupport" exact element={<HelpAndSupport />} />
            <Route path="/logout" exact element={<Logout />} />
            
          </Routes>
          <MayShowFooter>
            <Footer />
          </MayShowFooter>
        </BrowserRouter>
      </div>
    );
  };

  export default App;




  

  /*import "./App.css";
  import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  import { BrowserRouter, Routes, Route } from "react-router-dom"; // Remove the import for Route here
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
  import Rooms from "./Components/Rooms/Rooms";
  import Profile from "./Pages/Profile";
  import ProfilePicture from "./Components/ProfilePicture/ProfilePicture";
  import MyCourses from "./Components/MyCourses/MyCourses";
  import Password from "./Components/Password/Password";
  import EmailAddress from "./Components/EmailAddress/EmailAddress";
  import HelpAndSupport from "./Components/HelpAndSupport/HelpAndSupport";
  import Logout from "./Components/LogOut/Logout";
  import React, { useState } from "react";
  import AuthenticatedNavbar from "./Components/Navbar/AuthenticatedNavbar";
  import UnauthenticatedNavbar from "./Components/Navbar/UnauthenticatedNavbar";
  
  const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user') !== null);
  
    const login = () => {
      setIsLoggedIn(true);
    };
  
    const logout = () => {
      localStorage.clear();
      setIsLoggedIn(false);
    };
  
    return (
      <div>
        <BrowserRouter>
          <MayBeShowNavbar>
          {isLoggedIn ? <AuthenticatedNavbar logout={logout} /> : <UnauthenticatedNavbar login={login} />}
          </MayBeShowNavbar>
          
          <Routes>
            <Route path="/" exact element={<Home />} />
            {/* <Route path='/categories' element={<Categories/>} />
              <Route path='/aboutus' element={<Aboutus/>}/>
              <Route path="/cart" element={<Cart/>} /> }
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/reset" exact element={<ConfirmationPassword />} />
            <Route path="/confirmCode" exact element={<ConfirmationCode />} />
            <Route path="/newpass/:id" exact element={<ResetPassword />} />
            <Route path="/coursePlay" exact element={<CoursePlay />} />
            <Route path="/courseContent" exact element={<CourseContent />} />
            <Route path="/courseVideo" exact element={<CourseVideo />} />
            <Route path="/overView" exact element={<OverView />} />
            <Route path="/comments" exact element={<Comments />} />
            <Route path="/room" exact element={<Rooms />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/profilePic" exact element={<ProfilePicture />} />
            <Route path="/myCourses" exact element={<MyCourses />} />
            <Route path="/password" exact element={<Password />} />
            <Route path="/emailAddress" exact element={<EmailAddress />} />
            <Route path="/helpSupport" exact element={<HelpAndSupport />} />
            <Route path="/logout" exact element={<Logout />} />
            <Route path="/login" element={<Login login={login} />} />
            <Route path="/signup" element={<Signup login={login} />} />
          </Routes>
          <MayShowFooter>
            <Footer />
          </MayShowFooter>
        </BrowserRouter>
      </div>
    );
  };
  
  export default App;*/
  
  