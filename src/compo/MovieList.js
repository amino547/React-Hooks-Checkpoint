import React from "react";
import MovieEl from "./MovieEl";
const MovieList = ({ movieData,nameSearch }) => {
  return (
    <div style={{ display: "inline-flex", flexWrap: "wrap", margin: "0 auto" }}>
      {movieData.filter((el)=> el.title.toLowerCase()
      .includes(nameSearch.toLowerCase().trim())     )
      
      
      
      
      .map((movie, index) => (
        <MovieEl movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
