import "./navbar.css";
import { useState, useEffect } from "react";
import Filterbox from "../filterbox/filterbox";
import Searchfield from "./SearchField";

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

      if (showfilter) {
        setshowfilter(false);
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
        <Filterbox
          abs={hidenavbar ? true : false}
          showfilter={showfilter}
          hidenavbar={hidenavbar}
        />
        <Searchfield
          showfilter={showfilter}
          setshowfilter={setshowfilter}
          hidenavbar={hidenavbar}
        />
      </div>
    </>
  );
};

export default Appbar;
