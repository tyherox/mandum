import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../imports/ui/pages/home';
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
              <Route exact path="/" component={Home}/>
              <Route path="/price" component={Price}/>
              <Route path="/story" component={Story}/>
              <Route path="/Contact" component={Contact}/>
              <Footer />
              <NavBar />
          </div>
      </Router>
      ,document.getElementById('render-target')
  );
});
