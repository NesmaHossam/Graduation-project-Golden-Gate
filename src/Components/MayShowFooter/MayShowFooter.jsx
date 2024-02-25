import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MayShowFooter = ({ children }) => {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    console.log("this is location", location);

    if (location.pathname === "/login") {
      setShowFooter(false);
    } else if (location.pathname === "/signup") {
      setShowFooter(false);
    } else if (location.pathname === "/reset") {
      setShowFooter(false);
    } else if (location.pathname === "/newpass/:id") {
      setShowFooter(false);
    } 
    else if (location.pathname === "/confirmCode") {
      setShowFooter(false);
    }else {
      setShowFooter(true);
    }
  }, [location]);

  return <div>{showFooter && children}</div>;
};

export default MayShowFooter;
