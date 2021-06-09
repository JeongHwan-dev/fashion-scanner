import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LangProvider from 'context/LanguageContext';
import Home from 'routes/Home';
import LookbookJisoo from 'routes/LookbookJisoo';
import LookbookJennie from 'routes/LookbookJennie';
import LookbookLisa from 'routes/LookbookLisa';
import LookbookRose from 'routes/LookbookRose';
import Matching from 'routes/Matching';
import Loading from 'routes/Loading';
import Failure from 'routes/Failure';
import Result from 'routes/Result';
import SharingJisoo from 'routes/SharingJIsoo';
import SharingJennie from 'routes/SharingJennie';
import SharingLisa from 'routes/SharingLisa';
import SharingRose from 'routes/SharingRose';
import DevTeam from 'routes/DevTeam';
import FAQ from 'routes/FAQ';
import NotFound from 'routes/NotFound';

const AppRouter = () => {
  return (
    <LangProvider>
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
          <Route exact path="/matching/sharing/jisoo" component={SharingJisoo} />
          <Route exact path="/matching/sharing/jennie" component={SharingJennie} />
          <Route exact path="/matching/sharing/lisa" component={SharingLisa} />
          <Route exact path="/matching/sharing/rose" component={SharingRose} />
          <Route exact path="/devteam" component={DevTeam} />
          <Route exact path="/faq" component={FAQ} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </LangProvider>
  );
};

export default AppRouter;
