import React, { useState } from 'react';
// import './Login1.css';

export const Login1 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation and submit the data to the server
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password.');
      return;
    }

    // Submit the form data to the server or perform any necessary actions
    console.log('Logged in successfully:', {
      username,
      password,
    });

    // Reset the form fields
    setUsername('');
    setPassword('');
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        Don't have an account? <a href="/registration">Register here</a>
      </div>
    </div>
  )
  };
  export default Login1;
