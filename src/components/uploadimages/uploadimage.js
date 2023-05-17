import React, { useState } from 'react';
import './uploadimage.css'; // Import the CSS file for styling

const MyForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [files, setFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the mandatory fields
    if (!firstName || !lastName || !dob || !gender) {
      alert('Please fill in all mandatory fields.');
      return;
    }

    // Perform further actions, such as submitting the form data or making API calls
    // You can access the field values using the state variables: firstName, lastName, dob, gender, and files
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('DOB:', dob);
    console.log('Gender:', gender);
    console.log('Files:', files);

    // Reset the form
    setFirstName('');
    setLastName('');
    setDob('');
    setGender('');
    setFiles([]);

    alert('Images uploaded for the patient successfully.');
  };

  const handleFileChange = (e) => {
    const fileList = Array.from(e.target.files);
    // Check file size before adding to state
    const filteredFiles = fileList.filter((file) => file.size <= 10 * 1024 * 1024); // 10MB limit
    setFiles(filteredFiles);
  };

  const handleClear = () => {
    setFirstName('');
    setLastName('');
    setDob('');
    setGender('');
    setFiles([]);
  };


  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="file">File Upload (Max 10MB):</label>
        <input
          type="file"
          id="file"
          onChange={handleFileChange}
          multiple
        />
      </div>
      <div className="file-list">
        <strong>Selected Files:</strong>
        {files.map((file, index) => (
        <div key={index}>{file.name}</div>
        ))}
      </div>
      <div className="form-buttons">
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </div>
    </form>
  );
};

export default MyForm;