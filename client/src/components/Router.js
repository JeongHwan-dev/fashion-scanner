import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import Matching from 'routes/Matching';
import LookbookSlider from 'components/lookbookComponents/Slider';
import LookbookJisoo from 'routes/LookbookJisoo';


const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Switch>
        <Route path="/swiper" component={LookbookSlider} />
      </Switch>
      <Switch>
        <Route path='/jisoolookbook' component={LookbookJisoo} />
      </Switch>
      <Switch>
        <Route exact path="/matching" component={Matching} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
