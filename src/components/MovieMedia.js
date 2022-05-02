import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function MovieMedia({images, movie}) {
  const movieImages = () =>{
    return(
      <div className="movieImageContainer">
        <h4>Images</h4>
        <hr/>
        <Carousel showThumbs={false}>
          {images.map((image, index) =>{
            return(
              <img key={index} src={`https://image.tmdb.org/t/p/w500${image.file_path}`} alt={movie.title} className="movieImages"/>
            )
          })}
        </Carousel>
      </div>
    )
  }

  const movieTrailer = () =>{
    return(
      <div className="movieImageContainer">
        <h4>Trailer</h4>
        <hr/>
        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} className="movieImages"/>
      </div>
    )
  }

  return (
    <div className="movieMediaContainer">
      {images.length === 0? "":movieImages()}
      {movie.backdrop_path? movieTrailer(): ""}
    </div>
  )
}

export default MovieMedia;