import React, { useState } from 'react';

export const UserRegForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [addressLine3, setAddressLine3] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleIdNumberChange = (event) => {
    setIdNumber(event.target.value);
  };

  const handleAddressLine1Change = (event) => {
    setAddressLine1(event.target.value);
  };

  const handleAddressLine2Change = (event) => {
    setAddressLine2(event.target.value);
  };

  const handleAddressLine3Change = (event) => {
    setAddressLine3(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (
      !firstName ||
      !lastName ||
      !idNumber ||
      !addressLine1 ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError('Please fill in all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Submit the form data to the server or perform any necessary actions
    console.log('Form submitted:', {
      firstName,
      lastName,
      idNumber,
      addressLine1,
      addressLine2,
      addressLine3,
      email,
      password,
    });

    // Reset the form fields
    setFirstName('');
    setLastName('');
    setIdNumber('');
    setAddressLine1('');
    setAddressLine2('');
    setAddressLine3('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <div>
      <h1>User Registration Form</h1>
      <form onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="idNumber">ID Number:</label>
          <input
            type="text"
            id="idNumber"
            value={idNumber}
            onChange={handleIdNumberChange}
            required
          />
        </div>
        <div>
          <label htmlFor="addressLine1">Address Line 1:</label>
          <input
            type="text"
            id="addressLine1"
            value={addressLine1}
            onChange={handleAddressLine1Change}
            required
          />
        </div>
        <div>
          <label htmlFor="addressLine2">Address Line 2:</label>
          <input
            type="text"
            id="addressLine2"
            value={addressLine2}
            onChange={handleAddressLine2Change}
          />
        </div>
        <div>
          <label htmlFor="addressLine3">Address Line 3:</label>
          <input
            type="text"
            id="addressLine3"
            value={addressLine3}
            onChange={handleAddressLine3Change}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Create Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Re-enter Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <div>
          <button type="submit">Register</button>
          <button type="button" onClick={() => setError('')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserRegForm;
