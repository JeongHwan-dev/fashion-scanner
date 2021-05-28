import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import Matching from 'routes/Matching';
import LookbookPage from 'routes/LookbookPage';


const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/lookbook/:memberId' component={LookbookPage} />
        <Route exact path="/matching" component={Matching} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
