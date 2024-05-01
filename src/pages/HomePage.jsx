import React from 'react'
import '../styles/homePage.css';
import NavBar from '../components/NavBar';
import HeroImage from '../assets/hero_banner.jpg'
import HeroTitle from '../assets/hero_title.png';
import PlayBtn from'../assets/play_icon.png'
import PlayBtnLight from'../assets/play-btn-inverted.png'
import InfoIcon from '../assets/info_icon.png'
import Card from '../components/Card';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
        <div className="homepage">
            <div className="navbar">
                <NavBar></NavBar>
            </div>
            <div id="heroDiv">
                <img src={HeroImage} alt="Netflix HomePage Hero Image" id='heroImg'/>
                <div id="heroCaption">
                    <img src={HeroTitle} alt="Hero Title" id='heroTitleImg'/>
                    <p>
                        Discovering his ties to a secret ancient order, 
                        a young man living in modern Istanbul emabrks on 
                        a quest to save the city from immortal energy.
                    </p>
                    <div className="hero-buttons">
                        <button className='hero-btn playBtn'>
                            <img src={PlayBtn} alt="Play Button" className='dark-visible'/>
                            <img src={PlayBtnLight} alt="Play Button" className='light-visible'/>
                            Play
                        </button>
                        <button className='hero-btn dark'>
                            <img src={InfoIcon} alt="More Info Button" />
                            More Info
                        </button>
                    </div>
                </div>
            </div>
            <div className="home-content">
                <Card type="movie"></Card>
                <Card title="Blockbuster Hits" category="top_rated" type="movie"></Card>
                <Card title="Only On Netflix" category="popular" type="movie"></Card>
                <Card title="Upcoming" category="upcoming" type="movie"></Card>
                <Card title="Popular TV Shows" category="popular" type="tv"></Card>
            </div>
            <div className="footer">
                <Footer></Footer>
            </div>
        </div>
    </div>
  )
}

export default HomePage