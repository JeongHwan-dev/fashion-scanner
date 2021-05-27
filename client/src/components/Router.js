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
        <Route path="/swiper" component={LookbookSlider} />
        <Route path='/jisoolookbook' component={LookbookJisoo} />
        <Route exact path="/matching" component={Matching} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
