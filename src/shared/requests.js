const API_KEY = '0f61def237ffa6f07320700ee78a6151';


const requests= {
    fetchPopular:`/movie/popular?api_key=${API_KEY}&language=en-us`,
    fetchSearch:`/search/movie?api_key=${API_KEY}&query=`
}

export default requests;