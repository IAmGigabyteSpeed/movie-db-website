import { useCallback, useEffect, useState } from 'react';
import './App.css';
import {getMovieList, searchMovie} from "./api"
import DarkMode from "./darkMode"


const App = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((results) => {
      setPopularMovies(results)
    })
  }, [])

  const PopularMovie = () => {
    return popularMovies.map((movie, i) => {
      return(
          <div className="Movie-wrapper" key={i}>
            <div className="Movie-title">{movie.title}</div>
            <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}></img>
            <div className="Movie-date">{movie.release_date}</div>
            <div className="Movie-rate">{movie.vote_average}</div>
          </div>
      )
    })
  }
  const search = async(q) => {
    if(q.length > 3){
        const query = await searchMovie(q)
        setPopularMovies(query.results)
        console.log({ query: query})
    }
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <DarkMode />
        <div className="navbar">
        <h1>Movie Database Time</h1>
        <input placeholder="Find Some Movies" className="searchMovie" onChange={({target}) => search(target.value)}/>
        </div>

        <div className="Movie-container">
          <PopularMovie />
        </div>
      </header>
    </div>
  );
}

export default App;
