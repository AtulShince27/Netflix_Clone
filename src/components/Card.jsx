import React, { useEffect, useRef, useState } from 'react'
import '../styles/card.css';
import cardsData from '../assets/cards/Cards_data';
import { list } from 'firebase/storage';
const Card = ({title, category, type}) => {
    const cardsRef = useRef();
    const [apiData, setAPIData] = useState([]);
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTkwZjhhNTVhMWJiM2NiY2VlMWVlMDk0YTBkNGVkMCIsInN1YiI6IjY2MzEyYTEyNGRmMjkxMDEyM2FhNDE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9YELqYTk5Nh6GTLT65HqcZG3wjr9DvhY_3sfFFUWH2w'
        }
      };
      
    const handleWheel = (ev) =>{
        ev.preventDefault();
        cardsRef.current.scrollLeft += ev.deltaY;
    }

    useEffect(()=>{
        // cardsRef.current.addEventListener('wheel', handleWheel, { passive: true });

        fetch(`https://api.themoviedb.org/3/${type?type:"movie"}/${category?category:"now_playing"}?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => setAPIData(response.results))
        .catch(err => console.error(err));
    })
    return (
        <div className='cards'>
            <h1 >{title? title: 'Popular On Netflix'}</h1>
            <div className="card-list" ref={cardsRef}>
                {
                    apiData.map((card, index) => {
                        return <div className='card' key={index}>
                            <img src={"https://image.tmdb.org/t/p/w500"+card.backdrop_path} alt='Popular Show'></img>
                            {type === "movie"? (
                                <>
                                <p>{card.original_title}</p>
                                </>
                                )
                                :
                                <></>
                            }   
                            {type === "tv"? (
                                <>
                                <p>{card.original_name}</p>
                                </>
                                )
                                :
                                <></>
                            }   
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Card