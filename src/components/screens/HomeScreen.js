import React, {useState} from 'react'
import requests from '../../shared/requests'
import MovieBanner from '../MovieBanner'
import MovieRow from '../MovieRow'




function HomeScreen() {

  const [selected, setSelected] = useState("Upcoming")
  const [req, setReq] = useState("upcoming")
  const options = [
    {
      name: 'Upcoming',
      value: 'upcoming',
    },
    {
      name: 'Popular',
      value: 'popular',
    },
    {
      name: 'Top Rated',
      value: 'top_rated',
    },
    {
      name: 'Now Playing',
      value: 'now_playing',
    },

  ];

  const handleChange = (e)=>{
    setReq(e.target.value)
    switch (e.target.value) {
      case 'popular':
        setSelected('Popular');
        break;
      case 'top_rated':
        setSelected('Top Rated');
        break;
      case 'now_playing':
        setSelected('Now Playing');
        break;
      case 'upcoming':
        setSelected('Upcoming');
        break;
      default:
        setSelected('Default');
    }
  };

  return (
    <>
      <MovieBanner/>
      <div className="shownMovies">
        <div className="shownMoviesRow">
        <h1><span className="movieSelectionTitle">{selected}</span> Movies</h1>
        <form>
          <select name="selectSort" id="selectSort" onChange={handleChange}>
            {options.map((option, i) => {
              return (
                <option value={option.value} key={i}>
                  {option.name}
                </option>
              );
            })}
          </select>
        </form>
        </div>
      </div>
      <MovieRow request={`/movie/${req}${requests.fetchMovies}`}/>
    </>
  )
}

export default HomeScreen