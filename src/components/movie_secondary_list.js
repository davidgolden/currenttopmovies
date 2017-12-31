import React from 'react';
import MovieSecondary from '../components/movie_secondary';


function MovieSecondaryList(props) {
  const secondaryMovieList = props.movieList.map((movie, index) => {
    return (
      <MovieSecondary
        movie={movie}
        key={movie.id}
        setMovie={props.setMovie}
        index={index}
      />
    )
  })

  return (
    <div>
      {secondaryMovieList}
    </div>
  );
}

export default MovieSecondaryList;
