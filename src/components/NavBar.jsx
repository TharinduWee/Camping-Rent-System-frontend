import React from 'react'
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav>
    
      <a href="/">
        <img src='logo.png' alt='Logo' />
      </a>
      <h1>Trekpin Camping Tents</h1>
      <a href="/about">About</a>
      <a href="/contactus">Contact us</a>
      <a href="/login">Login</a>
      <a href="/signup">SignUp</a>
    
    </nav>
  )
}
