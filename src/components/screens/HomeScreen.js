import React from 'react'
import MovieBanner from '../MovieBanner'
import MovieRow from '../MovieRow'
import NavBar from '../NavBar'

function HomeScreen({movie}) {
  return (
    <>
      <NavBar/>
      <MovieBanner movie={movie}/>
      <h1><span className="movieSelectionTitle">Popular</span> Movies</h1>
      <MovieRow/>
    </>
  )
}

export default HomeScreen