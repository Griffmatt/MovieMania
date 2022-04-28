import React from 'react'
import SearchBar from '../SearchBar'
import requests from '../../shared/requests'

function MovieSearch() {

  return (
    <>
      <SearchBar request={requests.fetchSearch}/>
    </>
  )
}

export default MovieSearch