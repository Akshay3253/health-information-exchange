import React, { useState } from "react";
import FormInput from "../reusable/formInput";
import FormButton from "../reusable/formButton";
import FormHeader from "../reusable/formHeader";

const MyForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [files, setFiles] = useState([]);

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
    setFiles([]);

    alert("Images uploaded for the patient successfully.");
  };

  const handleFileChange = (e) => {
    const fileList = Array.from(e.target.files);
    // Check file size before adding to state
    const filteredFiles = fileList.filter(
      (file) => file.size <= 10 * 1024 * 1024
    ); // 10MB limit
    setFiles(filteredFiles);
  };

  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setDob("");
    setGender("");
    setFiles([]);
  };

  return (
    <div id="uploadForm">
      <FormHeader title="Upload Files" />
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
            <label>File Upload (Max 10MB):</label>
            <input type="file" id="file" onChange={handleFileChange} multiple />
          </div>

          <div className="col-6">
            {files.length > 0 ? <label>Selected Files:</label> : null}
            {files.map((file, index) => (
              <div key={index}>{file.name}</div>
            ))}
          </div>
        </div>

        <div className="customColumn">
          <div className="col-6">
            <FormButton title="Submit" submitHandler={handleSubmit} />
          </div>

          <div className="col-6">
            <FormButton title="Clear" submitHandler={handleClear} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
