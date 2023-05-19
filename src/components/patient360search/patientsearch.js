import React, { useState } from "react";
import FormButton from "../reusable/formButton";
import FormHeader from "../reusable/formHeader";

const PatientSearch = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the mandatory fields
    if (!firstName || !lastName || !dob || !gender) {
      alert("Please fill in all mandatory fields.");
      return;
    }

    // Reset the form
    setFirstName("");
    setLastName("");
    setDob("");
    setGender("");

    alert("Searching patient....");
  };

  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setDob("");
    setGender("");
  };

  return (
    <div id="uploadForm">
      <FormHeader title="Search Patient" />
      <div className="container">
        <div className="customColumn">
          <div className="col-6">
            <label>First Name*</label>
            <input
              type="text"
              placeholder="Enter patient's first name"
              name="fname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="col-6">
            <label>Last Name*</label>
            <input
              placeholder="Enter patient's last name"
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="customColumn">
          <div className="col-6">
            <label>Date of Birth*</label>
            <input
              placeholder="Enter patient's date of birth"
              type="date"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="col-6">
            <label>Gender*</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option disabled value="">
                Select patient's gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="customColumn">
          <div className="col-6">
            <FormButton title="Search" submitHandler={handleSubmit} />
          </div>

          <div className="col-6">
            <FormButton title="Clear" submitHandler={handleClear} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientSearch;
