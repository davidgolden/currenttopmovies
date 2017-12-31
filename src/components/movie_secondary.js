import React from 'react';


function MovieSecondary(props) {

  function handleClick() {
    props.setMovie(props.movie, props.index)
  }

    return (
      <button onClick={handleClick}>
      <div className='secondary-movie-inner-container'>


        <div className='secondary-movie-image'>
          <img src={'https://image.tmdb.org/t/p/w640/'+props.movie.poster_path} alt='Movie Poster' />
        </div>
        <div className='secondary-movie-text'>
          <h4>{props.movie.title} - {props.movie.vote_average}</h4>
          <p>{props.movie.overview.substring(0,150)+'...'}</p>
        </div>

      </div>
      </button>
    );
}

export default MovieSecondary;
