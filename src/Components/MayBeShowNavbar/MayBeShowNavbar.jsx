import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MayBeShowNavbar = ({ children }) => {
  const location = useLocation();
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    console.log("this is location", location);

    if (location.pathname === "/login") {
      setShowNavBar(false);
    } else if (location.pathname === "/signup") {
      setShowNavBar(false);
    } else if (location.pathname === "/reset") {
      setShowNavBar(false);
    } else if (location.pathname === "/newpass/:id") {
      setShowNavBar(false);
    } else if (location.pathname === "/confirmCode") {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
  }, [location]);
  return <div>{showNavBar && children}</div>;
};

export default MayBeShowNavbar;
