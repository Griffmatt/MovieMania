import React from 'react'
import MovieBanner from '../MovieBanner'
import MovieRow from '../MovieRow'
import NavBar from '../NavBar'


function HomeScreen({movie, movies}) {

  return (
    <>
      <NavBar/>
      <MovieBanner movie={movie}/>
      <h1><span className="movieSelectionTitle">Popular</span> Movies</h1>
      <MovieRow movies={movies}/>
    </>
  )
}

export default HomeScreen