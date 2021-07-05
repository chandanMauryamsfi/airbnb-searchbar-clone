import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Appbar from './AppBar/navbar'
// import Filterbox from './filterbox';
import { useState, useEffect , createContext} from "react";
import bgimg from "./images/karsten-winegeart-sStahKEhT9w-unsplash.jpg"
import Appbar from "./AppBar/index"



ReactDOM.render(
  <React.StrictMode>
    <div className="scroll">
    <img src={bgimg} alt=""></img>
    </div>
    <Appbar/>
  </React.StrictMode>,
  document.getElementById('root')
);

