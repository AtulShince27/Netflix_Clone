import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/loginPage.css';
import NetflixLogo from '../assets/logo.png';
import { login, signup } from '../Firebase';
const LoginPage = () => {
  // const navigate = useNavigate();
  const [pageState, setPageState] = useState("signInPage");
  const [username, setUserName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const userAuth = async (ev) => {
    ev.preventDefault();
    if(pageState === "loginPage"){
      await login(emailId, password);
    } else {
      await signup(username, emailId, password);
    }
  }
  // const handleNavigate = () =>{
  //   console.log("Navigate Initiated");
  //   navigate("/sign-in");
  // }
  return (
    <div className='loginPage'>
      <div className='netflix-logo'>
        <img src={NetflixLogo} alt="Netflix Logo" />
      </div>
      <div className="content-container">
        {pageState === "signInPage"? (<h2>Sign Up</h2>): (<h2>Sign In</h2>)}
        <form action="/">
          {pageState === "signInPage"? <input type="text" name='username' id='username' placeholder='Enter Your Name' value={username} onChange={(e)=> setUserName(e.target.value)}/>: <></>}
          <input type="email" name='emailId' id='emailId' placeholder='E-Mail ID' value={emailId} onChange={(e)=> setEmailId(e.target.value)}/>
          <input type="password" name='password' id='password' placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>

          <button onClick={userAuth}>Sign Up</button>

          <div className="help">
            <div className='rememberBox'>
              <input type="checkbox" name="rememberMe" id="rememberMe"/>
              <p>Remember Me</p>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="signIn">
          {pageState === "loginPage"? (
            <p>New to Netflix? <button id='signInText' onClick={()=>setPageState("signInPage")}>Sign Up</button></p>
          ) : 
          (
            <></>
          )}
          {pageState === "signInPage"? (
          <p>Already have an account? <button id='signInText' onClick={()=>setPageState("loginPage")}>Log In</button></p>
          ) : (
          <></>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoginPage