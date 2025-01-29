import React, { useEffect, useState } from 'react'
import './Trending.css'
import MovieCard from '../../Shared/MovieCard/MovieCard';
import { IoIosTrendingUp } from "react-icons/io";

const Trending = () => {

  const [data, setData] = useState({})

  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTc2ODVmNDNmOTVlM2ZkNDlmMjVjNmZlYWJmMDBkNiIsIm5iZiI6MTcyMTE0NjYzMC4yNzYsInN1YiI6IjY2OTY5ZDA2ZDI2MzQ4YjNkM2RmODExMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._J7-VtW7_GCkFSMf5KN0dPdL708yZLo5EBaVblCiEDc'
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
                    />
              )) }
            </div>
        </div>
    </div>
  )
}

export default Trending