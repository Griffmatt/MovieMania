import './styles/base.css';
import './styles/MovieRow.css'
import './styles/NavBar.css'
import './styles/MovieInfo.css'
import './styles/MovieBanner.css'
import HomeScreen from './components/screens/HomeScreen';
import MovieInfo from './components/screens/MovieInfo';

import {Routes, Route} from 'react-router-dom'
import FavoritedMovies from './components/screens/FavoritedMoviesScreen';
import MovieSearch from './components/screens/MovieSearchScreen';

import instance from './axios';
import requests from './shared/requests';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


function App() {

  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function fetchData() {
        const response = await instance.get(requests.fetchPopular)
            setMovies(response.data.results)
        return response;
    }
    fetchData();
  }, []);

  let movie = movies[0]

  const FilterMovie = () => {
    const {id} = useParams()
  let movie = movies.filter(movie=> movie.id == id)
  console.log(movie)
  return(
    <MovieInfo movie={movie[0]}/>
  )
  }

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<HomeScreen movie={movie} movies={movies}/>}/>
          <Route path={`/:id`} element={<FilterMovie/>}/>
          <Route path="/favorite-movies" element={<FavoritedMovies/>}/>
          <Route path="/search-movies" element={<MovieSearch/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
