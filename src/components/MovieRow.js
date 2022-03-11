import React from 'react'
import {MOVIES} from '../shared/movies'
import {Link} from 'react-router-dom'

function MovieRow() {
  const base_url = "https://image.tmdb.org/t/p/w300"
  let movies = MOVIES
  return (
    <div className="movieRowGrid">
      {movies.map(movie =>{
        return(
          <div key={movie.title} className="moviePoster">
            <input className="star" type="checkbox"/>
            <Link to={`/movie`}>
            <div className={`movieRating ${movie.vote_average > 9? "greatMovie":movie.vote_average > 7.5? "goodMovie":movie.vote_average > 5? "averageMovie": "badMovie"}`}>
              {movie.vote_average}
            </div>
            <img src={`${base_url}${movie.poster_path}`} alt={movie.title}/>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default MovieRow