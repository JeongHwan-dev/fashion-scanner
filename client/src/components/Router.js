import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import LookbookPage from 'routes/LookbookPage';
import Matching from 'routes/Matching';
import Result from 'routes/Result';
import DevTeam from 'routes/DevTeam';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/lookbook/:memberId" component={LookbookPage} />
        <Route exact path="/matching" component={Matching} />
        <Route exact path="/matching/result" component={Result} />
        <Route exact path="/devteam" component={DevTeam} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
