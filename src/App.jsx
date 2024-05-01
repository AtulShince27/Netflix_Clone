import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import { Routes, useNavigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignInPage from './pages/SignInPage';
import { Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import './App.css'

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user)=> {
      if(user){
        console.log("Successfully logged in!");
        navigate("/");
      } else {
        console.log("Successfully logged out!");
        navigate("/login");
      }
    })
  }, [])
  
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/login' element={<LoginPage></LoginPage>}></Route>
      <Route path='/sign-in' element={<SignInPage></SignInPage>}></Route>
    </Routes>
    </>
  )
}

export default App
