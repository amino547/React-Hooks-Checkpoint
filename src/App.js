import React, { useState } from "react";
import { data } from "./data.js";
import Header from "./compo/Header";
import MovieList from "./compo/MovieList";
import Form from "./compo/Form";
import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Trailer from "./compo/Trailer.js";
function App() {
  const [movieData, setMovieData] = useState(data);
  const [nameSearch, setNameSearch] = useState(""); 
  const addMovie = (newMovie) => {
    setMovieData([...movieData, newMovie]);
  };

  return (
    <>
      <Header setNameSearch={setNameSearch} />
      <Routes>
        <Route path='/' element={<MovieList movieData={movieData} nameSearch={nameSearch} />} /> 
 <Route path='/add' element={ <Form addMovie={addMovie} />} />
  <Route path='/trailer/:id' element={  <Trailer/> } />
      </Routes>
    </>
  );
}

export default App;