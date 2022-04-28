import React, {useState, useEffect} from 'react'
import instance from '../axios'
import {Link} from 'react-router-dom'

function MovieRow({request}) {
  const base_url = "https://image.tmdb.org/t/p/w300"

  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function fetchData() {
        const response = await instance.get(request)
            setMovies(response.data.results)
            console.log(response.data.results[0])
        return response;
    }
    fetchData();
  },[request] );
  console.log(movies)
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