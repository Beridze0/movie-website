import React, { useEffect, useState } from 'react'
import './Movie.css'
import MovieImg from '../../components/MovieImg/MovieImg'
import MovieDetails from '../../components/MovieDetails/MovieDetails'
import { useParams } from 'react-router-dom'

const Movie = () => {

    const {id} = useParams()
    const [data, setData] = useState({})

   useEffect(()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTc2ODVmNDNmOTVlM2ZkNDlmMjVjNmZlYWJmMDBkNiIsIm5iZiI6MTcyMTE0NjYzMC4yNzYsInN1YiI6IjY2OTY5ZDA2ZDI2MzQ4YjNkM2RmODExMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._J7-VtW7_GCkFSMf5KN0dPdL708yZLo5EBaVblCiEDc'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.error(err));
   },[])

   console.log(data)

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