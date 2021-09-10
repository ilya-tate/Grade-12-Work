import React from 'react';
import Movies from '../Components/Movies';
import SearchForm from '../Components/SearchForm';

const Home = () => {
  return (
    <div>
      <SearchForm />
      <Movies />
    </div>
  );
}

export default Home;
