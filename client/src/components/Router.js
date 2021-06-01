import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'components/commonComponents/ScrollToTop';
import Home from 'routes/Home';
import LookbookPage from 'routes/LookbookPage';
import Matching from 'routes/Matching';
import Loading from 'routes/Loading';
import Result from 'routes/Result';
import Failure from 'routes/Failure';
import DevTeam from 'routes/DevTeam';

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/lookbook/:memberId" component={LookbookPage} />
        <Route exact path="/matching" component={Matching} />
        <Route exact path="/matching/loading" component={Loading} />
        <Route exact path="/matching/failure" component={Failure} />
        <Route exact path="/matching/result" component={Result} />
        <Route exact path="/devteam" component={DevTeam} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
