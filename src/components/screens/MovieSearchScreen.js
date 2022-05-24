import React, {useState} from 'react'
import MovieRow from '../MovieRow'
import requests from '../../shared/requests'

function MovieSearch() {

  const [searchMovie, setSearchMovie]= useState('a')

  return (
    <>
      <input type="search" placeholder="Search For a Movie..." className="searchBar" onChange={event=> setSearchMovie(event.target.value)}/>
      <MovieRow request={`${requests.fetchSearch}${searchMovie}`} search={true}/>
    </>
  )
}

export default MovieSearch