import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RouteTransition } from 'react-router-transition';

import Home from '../imports/ui/pages/home/main';
import Price from '../imports/ui/pages/price/main';
import Story from '../imports/ui/pages/story';
import Contact from '../imports/ui/pages/contact';

import NavBar from '../imports/ui/components/navBar/main';
import Footer from '../imports/ui/components/footer/main';

import '../imports/ui/style/main.css';
import '../imports/ui/style/fonts.css';
import '../imports/ui/style/containers.css';
import '../imports/ui/style/elements.css';

Meteor.startup(() => {
  render(
      <Router>
          <div id="bootstrap-overrides">

              <Route render={({location, history, match}) => {
                  return (
                      <RouteTransition
                          pathname={location.pathname}
                          atEnter={{ opacity: 0 }}
                          atLeave={{ opacity: 0 }}
                          atActive={{ opacity: 1 }}
                      >
                          <Switch key={location.key} location={location}>
                              <Route exact path="/" component={Home}/>
                              <Route path="/price" component={Price}/>
                              <Route path="/story" component={Story}/>
                              <Route path="/contact" component={Contact}/>
                          </Switch>
                      </RouteTransition>
                  );
              }} />

              <Footer />
              <NavBar />
          </div>
      </Router>
      ,document.getElementById('render-target')
  );
});
