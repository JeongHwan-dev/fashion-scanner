import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import Matching from 'routes/Matching';
import Loading from 'routes/Loading';
import Result from 'routes/Result';
import Failure from 'routes/Failure';
import DevTeam from 'routes/DevTeam';
import FAQ from 'routes/FAQ';
import LookbookJennie from 'routes/LookbookJennie';
import LookbookRose from 'routes/LookbookRose';
import LookbookLisa from 'routes/LookbookLisa';
import LookbookJisoo from 'routes/LookbookJisoo';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/lookbook/jennie" component={LookbookJennie} />
        <Route exact path="/lookbook/rose" component={LookbookRose} />
        <Route exact path="/lookbook/jisoo" component={LookbookJisoo} />
        <Route exact path="/lookbook/lisa" component={LookbookLisa} />
        <Route exact path="/matching" component={Matching} />
        <Route exact path="/matching/loading" component={Loading} />
        <Route exact path="/matching/failure" component={Failure} />
        <Route exact path="/matching/result" component={Result} />
        <Route exact path="/devteam" component={DevTeam} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/matching/loading" component={Loading} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
