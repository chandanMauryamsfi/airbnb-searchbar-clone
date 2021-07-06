import { useState, useEffect, useRef , useContext} from "react";
import "./filterbox.css";
import LocationFilter from "../filtercontent/locationfilter";
import GuestFilter from "../filtercontent/guestcount";
import DatePicker from "react-date-picker";
import { MONTHS } from "../constants";
import { location , value } from "../AppBar/index";

const Datepicker = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    props.setStartDate(startDate);
    props.setEndDate(endDate);
  }, [startDate, endDate, props]);
  if (props.showInDateFilter) {
    return (
      <>
        <DatePicker
          onChange={(val) => {
            setStartDate(val);
          }}
          value={startDate}
          isOpen={props.showInDateFilter}
          closeCalendar={false}
          minDate={new Date()}
        />
      </>
    );
  } else if (props.showOutDateFilter) {
    return (
      <>
        <DatePicker
          onChange={setEndDate}
          value={endDate}
          isOpen={props.showOutDateFilter}
          closeCalendar={false}
          minDate={new Date()}
        />
      </>
    );
  } else {
    return <></>;
  }
};

const Filterbox = (props) => {

    const loc = useContext(location)
    const val = useContext(value)
    
  const refr = useRef(null);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (refr.current && !refr.current.contains(event.target)) {
        setShowGuestCounter(false);
        setShowInDateFilter(false);
        setShowOutDateFilter(false);
        setDatePickerIsOpen(false);
        setShowlocationfilter(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refr]);

  useEffect(() => {
    function onScroll() {}

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const [showlocationfilter, setShowlocationfilter] = useState(false);
  const [showGuestCounter, setShowGuestCounter] = useState(false);
  const [showInDateFilter, setShowInDateFilter] = useState(false);
  const [showOutDateFilter, setShowOutDateFilter] = useState(false);
  const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
    <div
        className={`filterContainer ${
          props.abs ? "showfilterbox" : "hidefilterbox"
        } ${
           !props.showfilter && !props.hidenavbar ? "just-hide" : ""
        }`}
      >
        <div
          ref={refr}
          className={`filterbox ${props.abs ? "" : "filterEnabled"}`}
        >
          <div
            className={`filterLocation pointerSpace ${
              showlocationfilter ? "showfilterboxSelected" : "hoverEffect"
            }`}
            onClick={() => {
              showlocationfilter
                ? setShowlocationfilter(false)
                : setShowlocationfilter(true);
              setShowGuestCounter(false);
              setShowInDateFilter(false);
              setShowOutDateFilter(false);
              setDatePickerIsOpen(false);
              document.getElementById("locationInputField").focus();
            }}
          >
            <p>
              <span>Location</span>
              <input
                id="locationInputField"
                className="locationInputField"
                type="text"
                placeholder="where to go?"
              ></input>
            </p>
          </div>
          <LocationFilter showlocationfilter={showlocationfilter} />
          <div className="vl"></div>
          <div className="datefiltercontainer">
            <div
              className={`filterCheckIn pointerSpace ${
                showInDateFilter ? "showfilterboxSelected" : "hoverEffect"
              }`}
              onClick={() => {
                setDatePickerIsOpen(!datePickerIsOpen);
                setShowInDateFilter(!showInDateFilter);
                setShowlocationfilter(false);
                setShowGuestCounter(false);
                setShowOutDateFilter(false);
              }}
            >
              <p>
                <span>Check in</span>
                <span>{`${startDate.getDate() === new Date().getDate() ? "Add date" : String(startDate.getDate()) + MONTHS[startDate.getMonth() + 1]}`}</span>
              </p>
            </div>
            <Datepicker
              showInDateFilter={showInDateFilter}
              showOutDateFilter={showOutDateFilter}
              setEndDate={setEndDate}
              setStartDate={setStartDate}
            />
          </div>

          <div className="vl"></div>
          <div
            className={`filterCheckOut pointerSpace ${
              showOutDateFilter ? "showfilterboxSelected" : "hoverEffect"
            }`}
            onClick={() => {
              setDatePickerIsOpen(!datePickerIsOpen);
              setShowOutDateFilter(!showOutDateFilter);
              setShowlocationfilter(false);
              setShowGuestCounter(false);
              setShowInDateFilter(false);
            }}
          >
            <p>
              <span>Check out</span>
              <span>{`${endDate.getDate() === new Date().getDate() ? "Add date" : String(endDate.getDate()) + MONTHS[endDate.getMonth() + 1]}`}</span>
            </p>
          </div>
          <div className="vl"></div>
          <div
            className={`datefiltercontainer pointerSpace ${
              showGuestCounter ? "showfilterboxSelected" : "hoverEffect"
            }`}
          >
            <div
              className={`filterGuest pointerSpace `}
              onClick={() => {
                showGuestCounter
                  ? setShowGuestCounter(false)
                  : setShowGuestCounter(true);
                setShowlocationfilter(false);
                setShowInDateFilter(false);
                setShowOutDateFilter(false);
                setDatePickerIsOpen(false);
              }}
            >
              <p>
                <span>Guests</span>
                <span>{val ? val : "Add guest"}</span>
              </p>
            </div>
            <button
              className={`filterSearch ${
                showGuestCounter ||
                showInDateFilter ||
                showOutDateFilter ||
                showlocationfilter
                  ? "stretchSearch"
                  : ""
              }`}
              onClick={() => console.log("hel")}
            >
              <img
                alt="search"
                src="https://img.icons8.com/material-outlined/24/ffffff/search--v1.png"
              />
              {showGuestCounter ||
              showInDateFilter ||
              showOutDateFilter ||
              showlocationfilter ? (
                <p>Search</p>
              ) : (
                ""
              )}
            </button>
          </div>

          <GuestFilter
            showGuestCounter={showGuestCounter}
            setGuestCount={loc}
          />
        </div>
      </div>
    
    </>
  );
};

export default Filterbox;
