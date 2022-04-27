import React from 'react'

import {Link} from 'react-router-dom'

function MovieRow({movies}) {
  const base_url = "https://image.tmdb.org/t/p/w300"
  return (
    <div className="movieRowContainer">
      <div className="movieRowGrid">
        {movies.map(movie =>{
          return(
            <div key={movie.title} className="moviePoster">
              <input className="star" type="checkbox"/>
              <Link to={`/${movie.id}`}>
              <div className={`movieRating ${movie.vote_average > 9? "greatMovie":movie.vote_average > 7.5? "goodMovie":movie.vote_average > 5? "averageMovie": "badMovie"}`}>
                {movie.vote_average}
              </div>
              <img src={`${base_url}${movie.poster_path}`} alt={movie.title}/>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MovieRow