import React, {useState, useEffect} from 'react'
import instance from '../../axios'
import MovieCard from '../MovieCard'
import requests from '../../shared/requests'

function MovieInfo({id}) {

  const [movie, setMovie] = useState([])

  useEffect(()=> {
    async function fetchData() {
          const response = await instance.get(`/movie/${id}${requests.fetchMovieInfo}`)
            setMovie(response.data)
        return response
      }
      fetchData();
  }, [id])
 console.log(movie)
  return (
    <>
      <MovieCard movie={movie}/>
    </>
  )
 
}

export default MovieInfo