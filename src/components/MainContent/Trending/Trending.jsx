import React, { useEffect, useState } from 'react'
import './Trending.css'
import MovieCard from '../../Shared/MovieCard/MovieCard';
import { IoIosTrendingUp } from "react-icons/io";

const Trending = () => {

  const [data, setData] = useState({})

  useEffect(()=>{
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
      }
    };
    
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(res => res.json())
      .then(data => setData(data.results))
      .catch(err => console.error(err));
  },[])



  

  return (
    <div className='trending-container'>
        <div className='trending'>
            <div className='trending-title'>
                <h1>Trending</h1>
                <IoIosTrendingUp size={25} />
            </div>
            
            <div className='movie-cards'>
              { data.length > 0 && data.map((item, index)=>(
                <MovieCard key={index}
                  movieImg={item.backdrop_path}
                  id={item.id}
                  title={item.original_title}
                  rating={item.vote_average}
                    />
              )) }
            </div>
        </div>
    </div>
  )
}

export default Trending