import React, { Component } from "react";
import FormHeader from "../reusable/formHeader";
import FormInput from "../reusable/formInput";
import FormButton from "../reusable/formButton";

class UploadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      files: [],
      fileName : "",
      firstNameError: false,
      lastNameError: false,
      dobError: false,
      genderError: false,
      fileError: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleFileChange = (e) => {
    const fileList = Array.from(e.target.files);
     // Check file size before adding to state
     const filteredFiles = fileList.filter(
       (file) => file.size <= 10 * 1024 * 1024
     );
     this.setState({
      files: filteredFiles
     });
  }

  handleSubmit(event) {
    event.preventDefault();
    const patientDetails = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dob: this.state.dob,
      gender: this.state.gender,
      files: this.state.files
    };
    if (this.validateFirstName(this.state.firstName) & this.validateLastName(this.state.lastName) & this.validateDob(this.state.dob) & this.validateGender(this.state.gender) & this.validateFile(this.state.files)) {
      alert("Uploading files.....");
    }
  }

  handleClear = () => {
    this.setState({
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      files: [],
      fileName : "",
      firstNameError: false,
      lastNameError: false,
      dobError: false,
      genderError: false,
      fileError: false
    });
  }

  validateFirstName(firstName) {
    if (firstName === '' || firstName.length < 0) {
      this.setState({
        firstNameError: true,
      });
      return false;
    }
    else {
      this.setState({
        firstNameError: false,
      });
      return true;
    }
  }

  validateLastName(lastName) {
    if (lastName === '' || lastName.length < 0) {
      this.setState({
        lastNameError: true,
      });
      return false;
    }
    else {
      this.setState({
        lastNameError: false,
      });
      return true;
    }
  }

  validateDob(dob) {
    if (dob === '' || dob.length < 0) {
      this.setState({
        dobError: true,
      });
      return false;
    }
    else {
      this.setState({
        dobError: false,
      });
      return true;
    }
  }

  validateGender(gender) {
    if (gender === '' || gender.length < 0) {
      this.setState({
        genderError: true,
      });
      return false;
    }
    else {
      this.setState({
        genderError: false,
      });
      return true;
    }
  }

  validateFile(files) {
    if (files.length === 0) {
      this.setState({
        fileError: true,
      });
      return false;
    }
    else {
      this.setState({
        fileError: false,
      });
      return true;
    }
  }

  render() {

    return (
      <div id="patientuploadform">
        <FormHeader title="Upload Files" />
        <div>
        <div className="customColumn">
        <div className="col-6">
          <FormInput
            description="First Name"
            placeholder="Enter patient's first name"
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          {this.state.firstNameError ? <label id="FirstNameBlank" className="customError">First Name can not be blank</label> : null}
        </div>
        <div className="col-6">
          <FormInput
            description="Last Name"
            placeholder="Enter patient's last name"
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          {this.state.lastNameError ? <label id="LastNameBlank" className="customError">Last Name can not be blank</label> : null}
        </div>
        </div>
        <div className="customColumn">
        <div className="col-6">
          <FormInput
            description="Date of Birth"
            placeholder="Enter patient's date of birth"
            type="date"
            name="dob"
            value={this.state.dob}
            onChange={this.handleChange}
          />
          {this.state.dobError ? <label id="DobBlank" className="customError">Date of Birth can not be blank</label> : null}
        </div>
        <div className="col-6">
          <div className="customRow">
            <label>Gender</label>
          <select
            description="Gender"
            placeholder="Select patient's gender"
            type="select"
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
          >
          <option disabled value="">Select patient's gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          </select>
          </div>
          {this.state.genderError ? <label id="GenderBlank" className="customError">Gender can not be blank</label> : null}
          </div>
        </div>
        <div className="customColumn">
        <div className="col-6">
        <div className="customRow">
            <label>File Upload (Max 10MB)</label>
            <input type="file" id="file" name="file" onChange={this.handleFileChange} multiple />
          </div>
          {this.state.fileError ? <label id="FileBlank" className="customError">Please select atleast 1 File</label> : null}
        </div>
        <div className="col-6">
             {this.state.files.length > 0 ? <label>Selected Files:</label> : null}
              {this.state.files.map((file, index) => (
                <div key={index}>{file.name}</div>
              ))}
          </div>
        </div>
        <div className="customColumn">
        <div className="col-6">
          <FormButton title="Search" submitHandler={this.handleSubmit} />
        </div>
        <div className="col-6">
          <FormButton title="Clear" submitHandler={this.handleClear} />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default UploadImage;