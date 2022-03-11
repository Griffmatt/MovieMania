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

function App() {
  let movie = {
    "adult": false,
    "backdrop_path": "/5jkE2SzR5uR2egEb1rRhF22JyWN.jpg",
    "genre_ids": [
        12,
        14
    ],
    "id": 671,
    "original_language": "en",
    "original_title": "Harry Potter and the Philosopher's Stone",
    "overview": "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard—with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths—and about the villain who's to blame.",
    "popularity": 226.241,
    "poster_path": "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    "release_date": "2001-11-16",
    "title": "Harry Potter and the Philosopher's Stone",
    "video": false,
    "vote_average": 7.9,
    "vote_count": 22216
}
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<HomeScreen movie={movie}/>}/>
          <Route path="/movie" element={<MovieInfo movie={movie}/>}/>
          <Route path="/favorite-movies" element={<FavoritedMovies/>}/>
          <Route path="/search-movies" element={<MovieSearch/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
