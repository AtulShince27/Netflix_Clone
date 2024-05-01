import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/signInPage.css';
import NetflixLogo from '../assets/logo.png';

const SignInPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () =>{
    console.log("Navigate Initiated");
    navigate("/login");
  }
  return (
<div className='loginPage'>
      <div className='netflix-logo'>
        <img src={NetflixLogo} alt="Netflix Logo" />
      </div>
      <div className="content-container">
        <h2>Sign Up</h2>
        <form action="/">
          <input type="text" name='username' id='username' placeholder='Enter Your Name'/>
          <input type="email" name='emailId' id='emailId' placeholder='E-Mail ID'/>
          <input type="password" name='password' id='password' placeholder='Password' />
          <button>Sign Up</button>
          <div className="help">
            <div className='rememberBox'>
              <input type="checkbox" name="rememberMe" id="rememberMe"/>
              <p>Remember Me</p>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="signIn">
          <p>Already have an account? <button id='signInText' onClick={handleNavigate}>Sign In</button></p>
        </div>
      </div>
    </div>
  )
}

export default SignInPage