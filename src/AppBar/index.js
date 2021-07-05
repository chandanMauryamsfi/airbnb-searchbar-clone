import { useState, createContext } from "react";
import Appbars from "./navbar";
const location = createContext(0);
const value = createContext(0);
const totalcountcontext = createContext();
const setTotalCountContext = createContext();

const Appbar = () => {
  const [count, setCount] = useState(0);
  const [totalcount, setTotalCount] = useState({
    "adultsCount": 0,
    "kidsCount": 0,
    "infantsCounts": 0,
  });
  return (
    <>
      <div>
        <location.Provider value={setCount}>
          <value.Provider value={count}>
            <totalcountcontext.Provider value={totalcount}>
              <setTotalCountContext.Provider value={setTotalCount}>
                <Appbars />
              </setTotalCountContext.Provider>
            </totalcountcontext.Provider>
          </value.Provider>
        </location.Provider>
      </div>
    </>
  );
};

export default Appbar;
export { location, value, totalcountcontext , setTotalCountContext };
