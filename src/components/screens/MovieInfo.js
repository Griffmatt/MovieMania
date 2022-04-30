import React, {useState, useEffect} from 'react'
import instance from '../../axios'
import MovieMedia from '../MovieMedia';
import requests from '../../shared/requests'
import Crew from '../Crew';

function MovieInfo({id}) {
  const base_url = "https://image.tmdb.org/t/p/w500"

  const [movie, setMovie] = useState([])
  const [cast, setCast] = useState([])
  const [images, setImages] = useState([])
  const [crew, setCrew] = useState([])
  const [genre, setGenre] = useState([])
  const [movieYear, setMovieYear] = useState([])

  useEffect(()=> {
    async function fetchData() {
          const response = await instance.get(`/movie/${id}${requests.fetchMovieInfo}`)
            setMovie(response.data)
            setCast(response.data.credits.cast)
            setCrew(response.data.credits.crew)
            setImages(response.data.images.backdrops)
            setGenre(response.data.genres)
            setMovieYear(response.data.release_date.slice(0,4))
        return response
      }
      fetchData();
  }, [id])


  const getGenre = ()=> {
    
    if (genre.length === 0) {
      return <p>Genres coming soon...</p>;
    }

    return (
      <div className="genre">
        {genre.map((genre, i) => (
        <p key={i} >
          {genre.name}
        </p>))}
      </div>
    )
  }

  const runTime = `${parseInt(movie.runtime/60)}h ${movie.runtime-parseInt(movie.runtime/60)*60}m`

  return (
    <div className="movieCardContainer">
            <div className="movieCardRow">
            <div className="movieCard">
            <div key={movie.title} className="movieCardPoster">
              <div className="movieImage">
                <input className="star" type="checkbox"/>
                <img src={`${base_url}${movie.poster_path}`} alt={movie.title}/>
                </div>
              </div>
              <div className="movieInfo">
                  <h4>Title</h4>
                  <h2>{movie.title}</h2>
                  {genre && getGenre()}
                  <h4>Description</h4>
                  <p>{movie.overview}</p>
                  <h5>{movieYear} - {runTime} -<span className='infoRating'>{movie.vote_average}/10</span></h5>
                  <Crew crew={crew}/>
              </div>
          </div>
          <MovieMedia images={images} movie={movie}/>
          </div>
    </div>
  )
 
}

export default MovieInfo