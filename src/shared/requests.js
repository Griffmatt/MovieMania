const API_KEY = '0f61def237ffa6f07320700ee78a6151';


const requests= {
    fetchPopular:`/movie/popular?api_key=${API_KEY}&language=en-us`,
    fetchUpcoming:`/movie/upcoming?api_key=${API_KEY}&language=en-us&include_adult=false`,
    fetchSearch:`/search/movie?api_key=${API_KEY}&query=`,
    fetchMovieInfo:`?api_key=${API_KEY}&language=en-US`
}

export default requests;