import axios from "axios";
import Button from '@material-ui/core/Button';
import { useState } from "react";
import "./updateform.css";

const Updatedata = (props) => {
  const [data, setdata] = useState({
    name: "",
    roll: "",
    city: "",
  });

  function handel(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setdata(newdata);
  }

  async function submitform(e) {
    e.preventDefault();
    const dic = {
      name: data.name,
      roll: data.roll,
      city: data.city,
    };
    await axios.post("http://localhost:8000/funcview/studentapi", dic);
    props.fetchagain();
    
      data.name = ""
      data.roll =""
      data.city = ""
  }
  return (
    <>
      <div className="formContainer">
        <form id="contact" onSubmit={(e) => submitform(e)} method="post">
          <h3>Add Student Detail</h3>
          <fieldset>
            <input
              placeholder="Your name"
              type="text"
              tabIndex="1"
              required
              autoFocus
              id="name"
              onChange={(e) => handel(e)}
              name="name"
              value={data.name}
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Roll"
              type="text"
              tabIndex="2"
              required
              id="roll"
              onChange={(e) => handel(e)}
              name="roll"
              value={data.roll}
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your City"
              type="text"
              tabIndex="3"
              required
              id="city"
              onChange={(e) => handel(e)}
              name="city"
              value={data.city}
            />
          </fieldset>
          <fieldset>
            <Button name="submit" type="submit" id="contact-submit">
              ADD
            </Button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Updatedata;
