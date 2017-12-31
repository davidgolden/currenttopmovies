import React from 'react';
import SimilarMovieList from '../components/similar_movie_list';


function MovieItem(props) {

    return (
      <div className='primary-movie-container'>
        <div className='primary-movie-image'>
          <img src={'https://image.tmdb.org/t/p/w640/'+props.movie.poster_path} alt='Movie Poster' />
        </div>
        <div className='primary-movie-text'>
          <h1>{props.movie.title}</h1>
          <h4>Average Rating: {props.movie.vote_average}</h4>
          <p>{props.movie.overview}</p>
          <h5>Released: {props.movie.release_date}</h5>
        </div>
        <div className='primary-movie-similar'>
          <SimilarMovieList similarMovies={props.similar} setMovie={props.setMovie} />
        </div>
      </div>
    );
}

export default MovieItem;
