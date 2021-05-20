import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import Member from 'routes/Member';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Switch>
        <Route exact path="/member" component={Member} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
