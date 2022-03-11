import React from 'react'
import NavBar from '../NavBar'
import MovieRow from '../MovieRow'

function FavoritedMovies() {
  return (
    <>
        <NavBar/>
            <h1><span className="movieSelectionTitle">Favorited</span> Movies</h1>
        <MovieRow/>
    </>
  )
}

export default FavoritedMovies