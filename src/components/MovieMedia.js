import React from 'react'

function MovieMedia({images, movie}) {
  const movieImages = () =>{
    return(
      <div>
        <h4>Images</h4>
        {images.map(image =>{
          console.log(image)
          return(
            <img src={`https://image.tmdb.org/t/p/w500${image.file_path}`} alt={movie.title} className="movieImages"/>
          )
        })}
      </div>
    )
  }

  return (
    <div className="movieMediaContainer">
      {images.length === 0? "":movieImages()}
      <div>
        <h4>Trailer</h4>
        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} className="movieImages"/>
      </div>
    </div>
  )
}

export default MovieMedia;