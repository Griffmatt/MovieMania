import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function MovieMedia({images, movie}) {
  const movieImages = () =>{
    return(
      <div className="movieImageContainer">
        <h4>Images</h4>
        <Carousel showThumbs={false}>
          {images.map(image =>{
            console.log(image)
            return(
              <img src={`https://image.tmdb.org/t/p/w500${image.file_path}`} alt={movie.title} className="movieImages"/>
            )
          })}
        </Carousel>
      </div>
    )
  }

  return (
    <div className="movieMediaContainer">
      {images.length === 0? "":movieImages()}
      <div className="movieImageContainer">
        <h4>Trailer</h4>
        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} className="movieImages"/>
      </div>
    </div>
  )
}

export default MovieMedia;