import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';
import SingleMovie from './Pages/SingleMovie';

function App() {
  return (
    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/movies/:id">
        <SingleMovie />
      </Route>

      <Route path="*">
        <Error />
      </Route>

    </Switch>
  );
}

export default App;
