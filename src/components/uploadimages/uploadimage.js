import React, { useState } from "react";
import FormButton from "../reusable/formButton";
import FormHeader from "../reusable/formHeader";

const UploadImage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [files, setFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the mandatory fields
    if (validFirstName(firstName,1,50) & validLastName(lastName,1,50) & validDOB(dob) & validGender(gender) & validFile(files)) {
      // Reset the form
      setFirstName("");
      setLastName("");
      setDob("");
      setGender("");
      setFiles([]);

      alert("Images uploaded for the patient successfully.");
      
      return;
    }

    function validFirstName(firstName,min,max){
      var uid_len = firstName.length;
      if (uid_len == 0 || uid_len <= min || uid_len > max)
      {
          document.getElementById("fnameNameBlank").innerHTML="First Name should be between ".concat(min).concat(" to ").concat(max).concat(" characters");
          return false;
      }
      else{
          document.getElementById("fnameNameBlank").innerHTML="";
      }
      return true;
  }

    function validLastName(lastName,min,max){
      var uid_len = lastName.length;
      if (uid_len == 0 || uid_len <= min || uid_len > max)
      {
          document.getElementById("lnameNameBlank").innerHTML="Last Name should be between ".concat(min).concat(" to ").concat(max).concat(" characters");
          return false;
      }
      else{
          document.getElementById("lnameNameBlank").innerHTML="";
      }
      return true;
  }

  function validDOB(dob){
    var uid_len = dob.length;
    if (uid_len == 0)
    {
        document.getElementById("dobBlank").innerHTML="Date of birth cannot be blank";
        return false;
    }
    else{
        document.getElementById("dobBlank").innerHTML="";
    }
    return true;
  }

  function validGender(gender){
    var uid_len = gender.length;
    if (uid_len == 0)
    {
        document.getElementById("genderBlank").innerHTML="Gender cannot be blank";
        return false;
    }
    else{
        document.getElementById("genderBlank").innerHTML="";
    }
    return true;
  }

  function validFile(file){
    var uid_len = file.length;
    if (uid_len == 0)
    {
        document.getElementById("fileBlank").innerHTML="Please select atleast 1 file to upload";
        return false;
    }
    else{
        document.getElementById("fileBlank").innerHTML="";
    }
    return true;
  }

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
    document.getElementById("fnameNameBlank").innerHTML="";
    document.getElementById("lnameNameBlank").innerHTML="";
    document.getElementById("dobBlank").innerHTML="";
    document.getElementById("genderBlank").innerHTML="";
    document.getElementById("fileBlank").innerHTML="";
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
            <label id="fnameNameBlank" style={{color: "red", height: "15px", fontSize: "15px"}}>
            </label>
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
            <label id="lnameNameBlank" style={{color: "red", height: "15px", fontSize: "15px"}}>
            </label>
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
            <label id="dobBlank" style={{color: "red", height: "15px", fontSize: "15px"}}></label>
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
            <label id="genderBlank" style={{color: "red", height: "15px", fontSize: "15px"}}></label>
          </div>
        </div>
        <div className="customColumn">
          <div className="col-6">
            <label>File Upload (Max 10MB):</label>
            <input type="file" id="file" onChange={handleFileChange} multiple />
            <label id="fileBlank" style={{color: "red", height: "15px", fontSize: "15px"}}></label>
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

export default UploadImage;
