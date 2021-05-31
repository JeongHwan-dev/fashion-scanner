import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import LookbookPage from 'routes/LookbookPage';
import Matching from 'routes/Matching';
import DevTeam from 'routes/DevTeam';
import FAQ from 'routes/FAQ';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/lookbook/:memberId" component={LookbookPage} />
        <Route exact path="/matching" component={Matching} />
        <Route exact path="/devteam" component={DevTeam} />
        <Route exact path="/faq" component={FAQ} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
