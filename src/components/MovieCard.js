import React from 'react'


function MovieCard({movie}) {
  const base_url = "https://image.tmdb.org/t/p/w400"
  console.log(movie)
 
  return (
    <div className="movieCardContainer">
      <div className="movieCardRow">
      <div className="movieCard">
         
            <div key={movie.title} className="movieCardPoster">
              <div className="movieImage">
                <input className="star" type="checkbox"/>
                <img src={`${base_url}${movie.poster_path}`} alt={movie.title}/>
                </div>
              </div>
              <div className="movieInfo">
                  <h4>Title</h4>
                  <h2>{movie.title}</h2>
                  <h4>Description</h4>
                  <p>{movie.overview}</p>
                  <h5>{movie.release_date} <span className='infoRating'>{movie.vote_average}/10</span></h5>
              </div>
          </div>
          <div className="movieMediaContainer">
            <div className="moveMedia">
              <h4>Images</h4>
              <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/>
            </div>
            <div className="moveMedia">
              <h4>Trailer</h4>
              <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/>
            </div>
          </div>
          <div className="movieTrailer">
              
          </div>
      </div>
    </div>
  )
}

export default MovieCard;