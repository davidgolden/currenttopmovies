import React from 'react';
import './App.css';

import MovieItem from './components/movie_item';
import MovieSecondaryList from './components/movie_secondary_list';
import GenreSelect from './components/genre_select';
import theMovieDb from 'themoviedb-javascript-library';

theMovieDb.common.base_uri = "https://api.themoviedb.org/3/";
theMovieDb.common.images_uri = "https://image.tmdb.org/t/p/";
theMovieDb.common.api_key = "4438a66354e20ba16bec83c4e3f40b2e";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      secondary_movies: [],
      similar: [],
      genres: []
     };

    this.getGenreNames();
    this.getMovies('28');
    this.getMovies = this.getMovies.bind(this);
    this.setMovie = this.setMovie.bind(this);
  }

  getGenreNames() {
    theMovieDb.genres.getList({}, (genres) => {
      let parsedGenres = JSON.parse(genres).genres;
        if(parsedGenres.length > 0) {
          this.setState({genres: parsedGenres});
        }
      }, (err) => {
        console.log(err)
      })
  }

  getSimilarMovies(movie_id) {
    theMovieDb.movies.getSimilarMovies({"id":movie_id }, (movies)=> {
      let parsedMovies = JSON.parse(movies).results;
      if(parsedMovies.length > 0) {
        let newSimilar = [];
        for(let i=0; i<3; i++) {
          newSimilar.push(parsedMovies[i]);
        }
        this.setState({similar: newSimilar})
      }
    }, (err) => {
      console.log(err);
    })
  }

  getMovieDetails(movie_id) {
    theMovieDb.movies.getById({"id":movie_id }, (movie) => {
      console.log(movie)
      return movie;
    }, (err) => {
      console.log(err);
    })
  }

  setMovie(movie, i) {
    this.setState((prevState, props) => {
      // this.getMovieDetails(movie.id);
      this.setState({movie: movie})
      if(i !== undefined) {
        let newSecondary = this.state.secondary_movies.slice();
        newSecondary.splice(i, 1, prevState.movie);
        this.setState({secondary_movies: newSecondary})
      }

    })
    //now update similar movies
    this.getSimilarMovies(movie.id)
  }

  getMovies(genre_id) {
    theMovieDb.discover.getMovies({
      'primary_release_date.gte': (Date.now()-3.154e+10).toString(),
      'primary_release_date.lte': (Date.now()).toString(),
      'with_genres': genre_id.toString(),
      'region': 'US'
    }, (movies) => {
      let parsedMovies = JSON.parse(movies).results;
      if(parsedMovies.length > 0) {
        this.setState({movie: parsedMovies[0]})
        let secondaryMovies = [];
        for(let i=1; i<5; i++) {
          secondaryMovies.push(parsedMovies[i])
        }
        this.setState({secondary_movies: secondaryMovies})

        // needs to be from selected movie
        this.getSimilarMovies(parsedMovies[0].id);
      }
    }, (err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className='app-container'>
        <GenreSelect className='navigation' genres={this.state.genres} getMovies={this.getMovies}/>
        <MovieItem
          movie={this.state.movie}
          similar={this.state.similar}
          setMovie={this.setMovie}
        />
        <div className='secondary-movie-container'>
          <MovieSecondaryList
            movieList={this.state.secondary_movies}
            setMovie={this.setMovie}
          />
        </div>
      </div>
    )
  }

}

export default App;
