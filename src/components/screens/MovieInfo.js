import React, {useState, useEffect} from 'react'
import instance from '../../axios'
import MovieMedia from '../MovieMedia';
import requests from '../../shared/requests'
import Crew from '../Crew';
import Cast from '../Cast';

import{ useDispatch, useSelector} from 'react-redux'
import { addFavorite, removeFavorite, selectFavorite } from '../../redux/favoriteSlice'

function MovieInfo({id}) {
  const base_url = "https://image.tmdb.org/t/p/w500"

  const [movie, setMovie] = useState([])
  const [cast, setCast] = useState([])
  const [images, setImages] = useState([])
  const [crew, setCrew] = useState([])
  const [genre, setGenre] = useState([])
  const [movieYear, setMovieYear] = useState([])
  const [loading, setLoading] = useState(true)

  const favorites = useSelector(selectFavorite)
  const dispatch = useDispatch()

  useEffect(()=> {
    async function fetchData() {
          const response = await instance.get(`/movie/${id}${requests.fetchMovieInfo}`)
            setMovie(response.data)
            setCast(response.data.credits.cast)
            setCrew(response.data.credits.crew)
            setImages(response.data.images.backdrops)
            setGenre(response.data.genres)
            setMovieYear(response.data.release_date.slice(0,4))
            setLoading(false)
            console.log(movie)
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

  const handleFavoritesCheck = (movie) =>{
    let filtered = favorites.filter(x => movie.title===x.title)
    if(filtered.length === 1) return true
  }

  const handleFavoritesClick = (movie) => {
    let filtered = favorites.filter(x => movie.title===x.title)
    if(filtered.length >= 1){
      dispatch(removeFavorite(movie))
    }else{
      dispatch(addFavorite(movie))
    }

  }

  const runTime =() => { return parseInt(movie.runtime/60) === 0?`${movie.runtime-parseInt(movie.runtime/60)*60}m`: `${parseInt(movie.runtime/60)}h ${movie.runtime-parseInt(movie.runtime/60)*60}m`}

  const budget =()=> { return (movie.budget).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })}

  const revenue =()=>{
    return (movie.revenue).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
  })}
 

  return (
      loading? "":<div className="movieCardContainer">
            <div className="movieCardRow">
            <div className="movieCard">
            <div key={movie.title} className="movieCardPoster">
              <div className="movieImage">
                <input className="star" type="checkbox" onClick={() => handleFavoritesClick(movie)} defaultChecked={handleFavoritesCheck(movie)}/>
                <img src={`${base_url}${movie.poster_path}`} alt={movie.title}/>
                </div>
              </div>
              <div className="movieInfo">
                  <h2>{movie.title}</h2>
                  {genre && getGenre()}
                  <h4>OverView</h4>
                  <p>{movie.overview}</p>
                  <h5>{movieYear}  {runTime()} <span className='infoRating'>{movie.vote_average}/10</span></h5>                
                  <Crew crew={crew} budget={budget()} revenue={revenue()}/>
                  <Cast cast={cast}/>
              </div>
          </div>
          <MovieMedia images={images} movie={movie}/>
          </div>
    </div>
  )
 
}

export default MovieInfo