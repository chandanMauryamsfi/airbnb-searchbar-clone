import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import Updatedata from "./updateform";
import "./App.css";
import Stutable from "./table";

function App() {
  const [mydata, setdata] = useState([]);
  const [loading, isload] = useState(true);

  const deletedata = async (val) => {
    await axios.delete(`http://localhost:8000/funcview/studentapi/${val}`);
    fetchData();
  };

  const fetchData = async () => {
    isload(true);
    const result = await axios.get("http://localhost:8000/funcview/studentapi");
    setdata(result.data);
    if (result) isload(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="container">
        <Updatedata fetchagain={fetchData} />
        <Stutable mydata={mydata} loading={loading} deletedata={deletedata} />
      </div>
    </>
  );
}

export default App;
