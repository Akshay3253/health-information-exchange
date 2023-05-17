import React, { useState } from 'react';
import './patientsearch.css'; // Import the CSS file for styling

const MyForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');

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

    // Reset the form
    setFirstName('');
    setLastName('');
    setDob('');
    setGender('');

    alert('Seaching patient...');
  };

  const handleClear = () => {
    setFirstName('');
    setLastName('');
    setDob('');
    setGender('');
  };


  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <h2 className="form-heading">Patient Search</h2>
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
      <div className="form-buttons">
        <button type="submit" className="search-form-buttons">Search Patient</button>
        <button type="button" className="clear-form-buttons" onClick={handleClear}>Clear</button>
      </div>
    </form>
  );
};

export default MyForm;