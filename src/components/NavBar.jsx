import React from 'react'
import '../styles/navBar.css';
import logo from '../assets/logo.png'
import searchIcon from '../assets/search_icon.svg'
import bellIcon from '../assets/bell_icon.svg'
import profileImg from '../assets/profile_img.png'
import caretIcon from '../assets/caret_icon.svg'
import { logout } from '../Firebase';
const NavBar = () => {
    const logoutHandler = async () => {
        await logout();
    }
  return (
    <div className='navBar'>
        <div className="nav-col">
            <div className="nav-colEl">
                <img src={logo} alt="Netflix Logo" id='netflixLogo'/>
            </div>
            <div className="nav-colEl">
                Home
            </div>
            <div className="nav-colEl">
                TV Shows
            </div>
            <div className="nav-colEl">
                Movies
            </div>
            <div className="nav-colEl">
                New & Popular
            </div>
            <div className="nav-colEl">
                My list
            </div>
            <div className="nav-colEl">
                Browse by Languages
            </div>
        </div>
        <div className="nav-col"></div>
        <div className="nav-col">
            <div className="nav-colEl">
                <img src={searchIcon} alt="Search Icon" />
            </div>
            <div className="nav-colEl">
                Children
            </div>
            <div className="nav-colEl">
                <img src={bellIcon} alt="Bell Icon" />
            </div>
            <div className="nav-colEl" id='profileCard'>
                <img src={profileImg} alt="Profile Card"/>
                <img src={caretIcon} alt="caret icon" id='caretIcon'/>
                <div className="logout">
                    <button className='logout-btn visible' onClick={logoutHandler}>Log Out Of Netflix</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar