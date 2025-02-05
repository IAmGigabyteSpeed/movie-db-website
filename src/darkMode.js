import { useCallback, useEffect, useState } from 'react';
import './App.css';
import {getMovieList, searchMovie} from "./api"

const App = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute('data-theme','dark')
  }

  const setLightMode = () => {
    document.querySelector("body").setAttribute('data-theme','light')
  }

  const toggleTheme = (e) => {
        if(e.target.checked) setDarkMode();
        else setLightMode()
  };

  return (
        <div className='dark_mode'>
            <label for='dark_input'>Dark or Light Mode?</label>
            <input className='dark_input' type='checkbox' id='darkmode-toggle' onChange={toggleTheme}></input>
        </div>
  );

}

export default App;
