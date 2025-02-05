import axios from "axios"

 const apiKey = process.env.REACT_APP_APIKEY
 const baseUrL = process.env.REACT_APP_BASEURL

export const getMovieList = async() => {
    const movie = await axios.get(`${baseUrL}/movie/popular?page=1&api_key=${apiKey}`)
    return movie.data.results
}

export const searchMovie = async(q) => {
    const search = await axios.get(`${baseUrL}/search/movie?query=${q}&page=1&api_key=${apiKey}`)
    return search.data
}