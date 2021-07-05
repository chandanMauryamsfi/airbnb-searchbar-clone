import { useState, useEffect, useContext } from "react";
import {
  location,
  value,
  totalcountcontext,
  setTotalCountContext,
} from "../AppBar/index";
import "../filtercontent/guestcount.css";

const GuestFilter = (props) => {
  const loc = useContext(location);
  const total = useContext(totalcountcontext);
  const setTotal = useContext(setTotalCountContext);
      useEffect(() => {
      loc(total.adultsCount + total.kidsCount + total.infantsCounts)
    }, [total]);

  if (props.showGuestCounter) {
    return (
      <>
        <div className="filterGuestContainer">
          <Counter
            count={total.adultsCount}
            label="Adults"
            setCount={setTotal}
            id="adultsCount"
            
          />
          <hr />
          <Counter
            count={total.kidsCount}
            label="Kids"
            setCount={setTotal}
            id="kidsCount"
            
          />
          <hr />
          <Counter
            count={total.infantsCounts}
            label="infants"
            setCount={setTotal}
            id="infantsCounts"
            
          />
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default GuestFilter;

const Counter = (props) => {
  const val = useContext(value);
  return (
    <>
      <div className="guestList">
        <p>{props.label}</p>
        <div className="counterButtons">
          <button
            onClick={() => {
              props.setCount((pre) => ({
                ...pre,
                [props.id]: props.count ? props.count - 1 : props.count,
              }));
              
            }}
          >
            -
          </button>
          {props.count}
          <button
            onClick={() => {
              props.setCount((pre) => ({
                ...pre,
                [props.id]: props.count + 1,
              }));
              
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};
