import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RouteTransition } from 'react-router-transition';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


import Home from '../imports/ui/pages/home/main';
import Price from '../imports/ui/pages/price/main';
import PricePackages from '../imports/ui/pages/price/packageChooser';
import PriceChooserA from '../imports/ui/pages/price/priceChooser-1';
import PriceChooserB from '../imports/ui/pages/price/priceChooser-2';
import PriceChooserC from '../imports/ui/pages/price/priceChooser-3';
import PriceChooserD from '../imports/ui/pages/price/priceChooser-4';
import PriceChooserE from '../imports/ui/pages/price/priceChooser-5';
import Story from '../imports/ui/pages/story';
import Contact from '../imports/ui/pages/contact';

import reducer from '../imports/reducers/main';
import NavBar from '../imports/ui/components/navBar/main';
import Footer from '../imports/ui/components/footer/main';

import '../imports/ui/style/main.css';
import '../imports/ui/style/fonts.css';
import '../imports/ui/style/containers.css';
import '../imports/ui/style/elements.css';
import '../imports/ui/style/color.css';

var store = createStore(reducer);

Meteor.startup(() => {
  render(
      <Router>
          <div id="bootstrap-overrides">

              <Route render={({location, history, match}) => {
                  return (
                      <Provider store={store}>
                          <RouteTransition
                              pathname={location.pathname}
                              atEnter={{ opacity: 0 }}
                              atLeave={{ opacity: 0 }}
                              atActive={{ opacity: 1 }}
                          >
                              <Switch key={location.key} location={location}>
                                  <Route exact path="/" component={Home}/>
                                  <Route exact path="/price" component={Price}/>
                                  <Route exact path="/price/packages" component={PricePackages}/>
                                  <Route exact path="/price/select-1" component={PriceChooserA}/>
                                  <Route exact path="/price/select-2" component={PriceChooserB}/>
                                  <Route exact path="/price/select-3" component={PriceChooserC}/>
                                  <Route exact path="/price/select-4" component={PriceChooserD}/>
                                  <Route exact path="/price/select-5" component={PriceChooserE}/>
                                  <Route exact path="/story" component={Story}/>
                                  <Route exact path="/contact" component={Contact}/>
                              </Switch>
                          </RouteTransition>
                      </Provider>
                  );
              }} />
              <Footer />
              <NavBar />
          </div>
      </Router>
      ,document.getElementById('render-target')
  );
});
