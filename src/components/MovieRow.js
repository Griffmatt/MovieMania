import React, {useState, useEffect} from 'react'
import instance from '../axios'
import {Link} from 'react-router-dom'
import{ useDispatch, useSelector} from 'react-redux'
import { addFavorite, removeFavorite, selectFavorite } from '../redux/favoriteSlice'

function MovieRow({request, search}) {

  const dispatch = useDispatch()
  

  const base_url = "https://image.tmdb.org/t/p/w300"
  const favorites = useSelector(selectFavorite)

  const [movies, setMovies] = useState([])
  
  
  useEffect(() => {
    if(!request){
      setMovies(favorites)
      
      return favorites
    }
   
    async function fetchData() {
      const response = await instance.get(request)
      setMovies([])
      setMovies(response.data.results.filter(movie=> movie.poster_path))
      return response;
    }
    fetchData();
  },[request] );

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


  return (
    <div className="movieRowContainer">
      <div className="movieRowGrid">
        {movies.map((movie, index) =>{
          return(
            <div key={index} className="moviePoster">
              <input className="star" type="checkbox" onClick={() => handleFavoritesClick(movie)} defaultChecked={handleFavoritesCheck(movie)}/>
              <Link to={`/${movie.id}`}>
              <div className={`movieRating ${movie.vote_average > 9? "greatMovie":movie.vote_average > 7.5? "goodMovie":movie.vote_average > 5? "averageMovie": "badMovie"}`}>
                {movie.vote_average === 0? "":movie.vote_average}
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