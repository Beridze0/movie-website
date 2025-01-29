import React, { useState } from 'react'
import './MovieDetails.css'
import MovieImg from '../MovieImg/MovieImg'
import { MdStarRate } from "react-icons/md";

const MovieDetails = ({getData, id, image, genres, language, title, description, date, length, vote}) => {

    const [isInList, setIsInList] = useState(false)

    

  return (
    <div className='movie-details'>
        <div className='movie-original-img'>
                <MovieImg image={image} />
        </div>
                <div className='about-movie'>
                    <div className='movie-title'>
                        <h1>{title}</h1>
                        <div className='movie-vote'>
                            <p>{vote?.toFixed(1)}</p>
                            {vote &&
                                [...Array(Math.floor(vote))].map((_, i)=>(
                                    <MdStarRate key={i} />
                                ))
                            }
                        </div>
                    </div>
                    <div className='movie-desc'>
                        <p>{description}</p>
                        <p>Language : {language}</p>
                        <p>Release Date : {date}</p>
                        <p>Duration : {length}min</p>
                    </div>
                    <div className='movie-btns'>
                        <button className='watch-trailer-btn'>WATCH TRAILER</button>
                        <button className='to-watchlist-btn'
                            disabled={isInList}
                            onClick={() => {getData(image, title, vote, id)
                                            setIsInList(prev => !prev)
                            }}
                        >{isInList? "ADDED TO WATCHLIST" : "TO WATCHLIST"}</button>
                    </div>
                </div>
                <div className='movie-cast-container'>
                    <div className='movie-cast'>
                        <h1>Director</h1>
                        <p>James Cameron</p>
                    </div>
                    <div className='movie-cast'>
                        <h1>Writers</h1>
                        <p>Rick Jaffa &bull; Rick Jaffa Amanda Silver</p>
                    </div>
                    <div className='movie-cast'>
                        <h1>Stars</h1>
                        <p>Zoe Saldana &bull; Rick Jaffa Sigourney Weaver</p>
                    </div>
                </div>
            </div>
  )
}

export default MovieDetails