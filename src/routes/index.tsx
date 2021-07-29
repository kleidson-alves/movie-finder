import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Movie from '../pages/Movie';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movies" exact component={Movies} />
      <Route path="/movie/:id" exact component={Movie} />
    </Switch>
  );
};

export default Routes;
