import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Pages } from './Pages';

const App = () => {
  return (
    <Switch>

      <Route exact path="/">
        <Pages.Home />
      </Route>

      <Route path="*">
        <Pages.Error />
      </Route>

    </Switch>
  );
}

export default App;
