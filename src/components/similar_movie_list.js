import React from 'react';
import SimilarMovie from '../components/similar_movie';


function SimilarMovieList(props) {

  const similarMovieList = props.similarMovies.map((movie) => {
    return (
      <li key={movie.id}>
        <SimilarMovie movie={movie} key={movie.id} setMovie={props.setMovie} />
      </li>
    )
  })

  return (
    <div>
      <h2>Explore Similar Titles:</h2>
      <ul>
        {similarMovieList}
      </ul>
    </div>
  );
}

export default SimilarMovieList;
