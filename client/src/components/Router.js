import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import Matching from 'routes/Matching';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/jisoolookbook" component={LookbookTest} />
        <Route path="/swiper" component={LookbookSlider} />
      </Switch>
      <Switch>
        <Route exact path="/matching" component={Matching} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
