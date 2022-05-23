import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import requests from '../shared/requests'
import instance from '../axios'

function MovieBanner() {
    const [movie, setMovie] =useState([])
    const base_url = "https://image.tmdb.org/t/p/original"
    useEffect(() =>{
        async function fetchData(){
            const response = await instance.get(requests.fetchUpcoming);
            const filteredResponse = response.data.results.filter(movie => movie.title && movie.backdrop_path)
            setMovie(filteredResponse[Math.floor(Math.random() * (filteredResponse.length -1))])
            return response
        }
        fetchData()
    }, [])

  return (
    <>
        {movie?<div className="movieBanner">
            <div>
                <Link to={`/${movie.id}`}>
                    <h1>{movie.title}</h1>
                </Link>
                <img src={`${base_url}${movie.backdrop_path}`} alt={movie.title}/>
            </div>
            <span className="bannerFade"/>
        </div>:""}
    </>
  )
}

export default MovieBanner