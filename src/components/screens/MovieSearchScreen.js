import React, {useEffect, useState} from 'react'
import NavBar from '../NavBar'
import axios from '../../axios';

import SearchBar from '../SearchBar'

function MovieSearch() {

  return (
    <>
      <NavBar/>
      <SearchBar/>
    </>
  )
}

export default MovieSearch