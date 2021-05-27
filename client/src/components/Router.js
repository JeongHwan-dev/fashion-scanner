import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import Matching from 'routes/Matching';
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
      </Switch>
    </Router>
  );
};

export default AppRouter;
