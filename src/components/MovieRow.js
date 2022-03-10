import React from 'react'
import {MOVIES} from '../shared/movies'

function MovieRow() {
  const base_url = "https://image.tmdb.org/t/p/w500"
  let movies = MOVIES
  return (
    <div className="movieRowGrid">
      {movies.map(movie =>{
        return(
          <div key={movie.title} className="moviePoster">
            <img src={`${base_url}${movie.poster_path}`} alt={movie.title}/>
          </div>
        )
      })}
    </div>
  )
}

export default MovieRow