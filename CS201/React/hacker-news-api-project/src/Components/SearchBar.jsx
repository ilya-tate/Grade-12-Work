import React from 'react';
import { useAppContext } from '../util/context';

const SearchBar = () => {
  const { query, handleSearch } = useAppContext();

  return (
    <div className="SearchBar">

      <form className="search-form" onSubmit={ e => e.preventDefault() }>
        <h2>Search Hacker New</h2>
        <input
          type="text"
          className="form-input"
          value = { query }
          onChange={ e => handleSearch(e.target.value) }
        />
      </form>

    </div>
  );
}

export default SearchBar;
