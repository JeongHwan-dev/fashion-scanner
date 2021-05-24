import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import LookbookTest from 'routes/LookbookJisooTest';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/jisoolookbook" component={LookbookTest} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
