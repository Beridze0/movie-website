import React from 'react'
import './Movie.css'
import image from '../../assets/1.jpeg'

const Movie = () => {
  return (
    <div className='movie-container'>
        <div className='movie'>
            <div className='movie-img-container'>
                <img className='movie-img' src={image} alt="" />
            </div>
            <div className='movie-details'>
                <div className='about-movie'>
                    <div className='movie-genre'>
                        <p>Thriller/Mystery</p>
                        <p>Action</p>
                        <p>Advanture</p>
                        <p>Fantasy</p>
                    </div>
                    <div className='movie-desc'>
                        <p>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of type and scrambled
                            it to make a type specimen book. It has survived not only 
                            five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the
                            sions of Lorem Ipsum.</p>
                    </div>
                    <div className='movie-read-more'>
                        <p>READ MORE</p>
                    </div>
                    <div className='movie-btns'>
                        <button className='watch-trailer-btn'>WATCH TRAILER</button>
                        <button className='to-watchlist-btn'>TO WATCHLIST</button>
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
        </div>
    </div>
  )
}

export default Movie