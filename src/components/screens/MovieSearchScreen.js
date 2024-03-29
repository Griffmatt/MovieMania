import React, {useState} from 'react'
import MovieRow from '../MovieRow'
import requests from '../../shared/requests'

function MovieSearch() {

  const [searchMovie, setSearchMovie]= useState('a')
  let timer

  const updateMovieSearch = (event) => {
    return searchTerm(event.target.value)
  }

  const searchTerm = (value) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      setSearchMovie(value?value:"a")
      console.log(value)
    }, 700);
  }

  return (
    <>
      <input type="search" placeholder="Search For a Movie..." className="searchBar" onChange={event=> updateMovieSearch(event)}/>
      <MovieRow request={`${requests.fetchSearch}${searchMovie}`} search={true}/>
    </>
  )
}

export default MovieSearch