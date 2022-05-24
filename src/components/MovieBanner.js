import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import requests from '../shared/requests'
import instance from '../axios'
import { Carousel } from 'react-responsive-carousel'

function MovieBanner() {
    const [movies, setMovie] =useState([])
    const base_url = "https://image.tmdb.org/t/p/original"
    useEffect(() =>{
        async function fetchData(){
            const response = await instance.get(requests.fetchPopular);
            const filteredResponse = response.data.results.filter(movie => movie.title && movie.backdrop_path)
            setMovie(filteredResponse.slice(0, 5))
            return response
        }
        fetchData()
    }, [])

  return (
    <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay
        interval={10000}
        infiniteLoop={true}
        showArrows={false}
        transitionTime={500}
    >
        {movies.map(movie=>{
            return(
                <div className="movieBanner" key={movie.id}>
                    <div>
                        <Link to={`/${movie.id}`}>
                            <h1>{movie.title}</h1>
                        </Link>
                        <img src={`${base_url}${movie.backdrop_path}`} alt={movie.title}/>
                    </div>
                    <span className="bannerFade"/>
                </div>
            )
        })}
    </Carousel>
  )
}

export default MovieBanner