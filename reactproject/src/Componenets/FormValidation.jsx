import React, { useState } from "react";
import "./FormValidationCss.css"

function FormValidation() {
  let [formData, setFormData] = useState({
    fn: "",
    mob: "",
    email: "",
    pwd: "",
  });
  let [error, setError] = useState({});

  //! updating the  state with enterd data from the  UI;

  let changeFormData = ({ target: { name, value } }) => {
    setFormData({ ...FormData, [name]: value });
  };

  //! submiting the form data
  let submitFormData = (e) => {
    e.preventDefault();
    setError(validate(FormData));
  };
  //! validataing the data
  let validate = (fdata) => {
    let errorMessage = {};

    //! full name validation
    if (!fdata.fn) {
      errorMessage.fnMessage = "FullName is Mandetory";
    } else if (fdata.fn.length < 6) {
      errorMessage.fnMessage = "FullName should contain Atleast 6 characters";
    }
    //! mob validation code

    if (!fdata.mob) {
      errorMessage.mobMessage = "Mobile number is mandetory";
    }
    return errorMessage;
  };
  console.log(error);
  return (
    <div>
      <form onSubmit={submitFormData} className="form">
        <div className="input-div">
          <input
            type="text"
            placeholder="FullName"
            name="fn"
            value={formData.fn}
            onChange={changeFormData}
          />
          <small>{error.fnMessage && error.fnMessage}</small>
        </div>

        <div className="input-div">
          <input
            type="tel"
            placeholder="Mobile"
            name="mob"
            value={formData.fn}
            onChange={changeFormData}
          />
          <small>{error.fnMessage && error.fnMessage}</small>
        </div>

        <div className="input-div">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.fn}
            onChange={changeFormData}
          />
          <small>{error.fnMessage && error.fnMessage}</small>
        </div>

        <div className="input-div">
          <input
            type="password"
            placeholder="Password"
            name="fwd"
            value={formData.fn}
            onChange={changeFormData}
          />
          <small>{error.fnMessage && error.fnMessage}</small>
        </div>

        <div className="input-div">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormValidation;
