import React from 'react';
import { useMovieContext } from '../util/context';

const SearchForm = () => {
  const { query, setQuery, error } = useMovieContext();
  // console.log(error); // Error has { show, msg }

  return (
    <form onSubmit={ e => e.preventDefault } className="search-form">
      <h2>Search Movies</h2>
      <input
        type="text"
        className="form-input"
        value={ query }
        onChange={ e => setQuery(e.target.value) }
      />
      { error.show && <div className="error">{ error.msg }</div> }
    </form>
  );
}

export default SearchForm;
