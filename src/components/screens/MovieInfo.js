import React, {useState, useEffect} from 'react'
import instance from '../../axios'
import MovieCard from '../MovieCard'
import requests from '../../shared/requests'

function MovieInfo({id}) {

  const [movie, setMovie] = useState([])
  const [cast, setCast] = useState([])
  const [images, setImages] = useState([])
  const [crew, setCrew] = useState([])
  const [genre, setGenre] = useState([])

  useEffect(()=> {
    async function fetchData() {
          const response = await instance.get(`/movie/${id}${requests.fetchMovieInfo}`)
            setMovie(response.data)
            setCast(response.data.credits.cast)
            setCrew(response.data.credits.crew)
            setImages(response.data.images.backdrops[0].file_path)
            setGenre(response.data.genres)
        return response
      }
      fetchData();
  }, [id])
console.log(movie)
  return (
    <>
      <MovieCard movie={movie} images={images} cast={cast} crew={crew} genre={genre}/>
    </>
  )
 
}

export default MovieInfo