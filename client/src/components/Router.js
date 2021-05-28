import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import Matching from 'routes/Matching';
import DevTeam from 'routes/DevTeam';
// import LookbookTest from 'routes/LookbookJisooTest';
// import LookbookSlider from 'routes/LookbookSlider';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/jisoolookbook" component={LookbookTest} />
        <Route path="/swiper" component={LookbookSlider} /> */}
        <Route exact path="/matching" component={Matching} />
        <Route exact path="/devteam" component={DevTeam} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
