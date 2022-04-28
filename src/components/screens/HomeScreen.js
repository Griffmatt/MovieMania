import React from 'react'
import requests from '../../shared/requests'
import MovieBanner from '../MovieBanner'
import MovieRow from '../MovieRow'




function HomeScreen() {

  return (
    <>
      <MovieBanner/>
      <h1><span className="movieSelectionTitle">Popular</span> Movies</h1>
      <MovieRow request={requests.fetchPopular}/>
    </>
  )
}

export default HomeScreen