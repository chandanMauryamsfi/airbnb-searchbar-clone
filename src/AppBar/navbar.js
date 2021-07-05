import "./navbar.css";
import { useState, useEffect } from "react";
import Filterbox from "../filterbox/filterbox";
import Searchfield from "./SearchField"

const Appbar = () => {
  const [hidenavbar, sethidenav] = useState(true);
  const [showfilter, setshowfilter] = useState(false);
  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      if (currentPosition < 50) {
        sethidenav(true);
      } else {
        sethidenav(false);
      }

      if(showfilter){
        setshowfilter(false)
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [showfilter]);
  return (
    <>
      <div
        className={`appbar ${hidenavbar ? "hide-appbar" : "show-appbar"} ${
          showfilter ? "appbar-height" : ""
        }`}
      >
        <div className="navItems">
        <img src="https://www.logosurfer.com/wp-content/uploads/2018/03/airbnb-logo_1.png"  alt="Airbnb Logo" />
        
        <div>
        <h4>Become a host</h4>
        </div>
        </div>
        {/* {showfilter || hidenavbar ? (
          <Filterbox abs={hidenavbar ? true : false} 
          showfilter={showfilter}/>
        ) : (
          <Searchfield
          showfilter={showfilter}
          setshowfilter={setshowfilter}/>
        )} */}
        
         <Filterbox abs={hidenavbar ? true : false} 
          showfilter={showfilter}
          hidenavbar={hidenavbar}
          />
        <Searchfield
          showfilter={showfilter}
          setshowfilter={setshowfilter}
          hidenavbar={hidenavbar}/>
         
      </div>
    </>
  );
};

export default Appbar;
