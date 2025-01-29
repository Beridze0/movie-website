import React, { useEffect, useState } from 'react'
import './Movie.css'
import MovieDetails from '../../components/MovieDetails/MovieDetails'
import { useParams } from 'react-router-dom'

const Movie = () => {

    const {id} = useParams()
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
      
      fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.error(err));
   },[id])

  return (
    <div className='movie-container'>
        <div className='movie'>
            <MovieDetails
                image={data?.backdrop_path}
                genres={data?.genres}
                language={data?.original_language}
                title={data?.original_title}
                description={data?.overview}
                date={data?.release_date}
                length={data?.runtime}
                vote={data?.vote_average}
            />
        </div>
    </div>
  )
}

export default Movie