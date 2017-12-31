import React from 'react';


function SimilarMovie(props) {

  function handleClick() {
    props.setMovie(props.movie)
  }

    return (
      <button onClick={handleClick}>{props.movie.title}</button>
    );
}

export default SimilarMovie;
