import "./App.css";
import { data } from "./data.js";
import Header from "./compo/Header.js"
import { useState } from "react";
import MovieList from "./compo/MovieList.js"
import Form from "./compo/Form.js";
import Footer from "./compo/Footer.js";

function App() {
  const [movieData, SetMovieData] = useState(data);

  

  const addMovie = (newMovie) => {
    SetMovieData([...movieData, newMovie]);
  };

  const[nameSearch,setNameSearch]=useState('')

  return (
    <>
      <Header setNameSearch={setNameSearch} />
      <MovieList movieData={movieData} nameSearch={nameSearch} />
      <Form addMovie={addMovie}  />
      <footer  >
        <Footer/>
      </footer>
    </>
  );
}

export default App;