import React from 'react'
import {Link} from 'react-router-dom'

function MovieBanner({movie}) {
    const base_url = "https://image.tmdb.org/t/p/original"
  return (
        <div className="movieBanner">
            <div>
                <Link to="/movie">
                    <h1>{movie.title}</h1>
                </Link>
                <img src={`${base_url}${movie.backdrop_path}`} alt={movie.title}/>
            </div>
            <span className="bannerFade"/>
        </div>
  )
}

export default MovieBanner