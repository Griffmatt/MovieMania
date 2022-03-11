import React from 'react'
import NavBar from '../NavBar'
import MovieCard from '../MovieCard'

function MovieInfo({movie}) {
  return (
    <>
        <NavBar/>
        <MovieCard movie={movie}/>
    </>
  )
}

export default MovieInfo