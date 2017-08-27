import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RouteTransition } from 'react-router-transition';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Home from '../imports/ui/pages/home/main';
import Price from '../imports/ui/pages/price/main';
import PricePackages from '../imports/ui/pages/price/package/main';
import PriceChooserA from '../imports/ui/pages/price/step-1/main';
import PriceChooserB from '../imports/ui/pages/price/step-2/main';
import PriceChooserC from '../imports/ui/pages/price/step-3/main';
import PriceChooserD from '../imports/ui/pages/price/step-4/main';
import PriceChooserE from '../imports/ui/pages/price/step-5/main';
/*import Story from '../imports/ui/pages/story';*/
import Contact from '../imports/ui/pages/contact/main';
import Admin from '../imports/ui/pages/admin/main';
import Samyeon from '../imports/samples/samyeon/main';

import reducer from '../imports/reducers/main';
import NavBar from '../imports/ui/components/navBar/main';
import Footer from '../imports/ui/components/footer/main';

import '../imports/ui/style/main.css';
import '../imports/ui/style/fonts.css';
import '../imports/ui/style/containers.css';
import '../imports/ui/style/elements.css';
import '../imports/ui/style/color.css';
import '../imports/ui/style/attributes.css';

var store = createStore(reducer);

Meteor.startup(() => {
  render(
      <Router>
          <Provider store={store}>
              <div id="bootstrap-overrides">

                  <Route render={({location, history, match}) => {

                      return (
                          <ScrollToTop location={location} history={history}>
                              <RouteTransition
                                  pathname={location.pathname}
                                  atEnter={{ opacity: 0 }}
                                  atLeave={{ opacity: 0 }}
                                  atActive={{ opacity: 1 }}>
                                  <Switch key={location.key} location={location}>
                                      <Route exact path="/" component={Home}/>
                                      {/*<Route exact path="/price" component={Price}/>
                                      <Route exact path="/price/packages" component={PricePackages}/>
                                      <Route exact path="/price/select-1" component={PriceChooserA}/>
                                      <Route exact path="/price/select-2" component={PriceChooserB}/>
                                      <Route exact path="/price/select-3" component={PriceChooserC}/>
                                      <Route exact path="/price/select-4" component={PriceChooserD}/>
                                      <Route exact path="/price/select-5" component={PriceChooserE}/>
                                      <Route exact path="/story" component={Story}*/}/>
                                      <Route exact path="/admin" component={Admin}/>
                                      <Route exact path="/contact" component={Contact}/>
                                      <Route exact path="/samples/samyeon" component={Samyeon}/>
                                  </Switch>
                              </RouteTransition>
                          </ScrollToTop>
                      );
                  }}/>
                  <Footer location={location} exception={["/admin","/:samples"]}/>
                  <NavBar location={location} exception={["/:samples"]}/>
              </div>
          </Provider>
      </Router>
      ,document.getElementById('render-target')
  );
});

class ScrollToTop extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname && this.props.history.action!="pop") {
            window.scrollTo(0, 0)
        }
    }

    render() {
        return this.props.children
    }
}

