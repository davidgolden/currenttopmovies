import React from 'react';

function GenreSelect(props) {

  function handleChange(id) {
    props.getMovies(id);
  }

    const GenreList = props.genres.map((genre) => {
      return (
        <option value={genre.id} key={genre.id}>{genre.name}</option>
      )
    })

    return (
      <div className='header'>
        <img src='../images/moviedb.svg' alt='The Movie DB' />
        <div className='header-text'>
          <h1>Current Top Movies</h1>
        </div>
        <div className='header-select'>
          <select className='genre-select'
          onChange = {(event) => handleChange(event.target.value)}>
            {GenreList}
          </select>
        </div>


      </div>
    )
}

export default GenreSelect;