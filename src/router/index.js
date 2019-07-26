import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {hot} from 'react-hot-loader';


import configureStore from '@/redux/store';
import Analyze from '@/containers/analyze';
import Customize from '@/containers/customize';

import Knowledge from '@/containers/knowledge';

import Docs from '@/containers/docs';


const store = configureStore();
const Router = ({component: Component, children, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      <Component {...props} ><Switch>{children}</Switch></Component>
    )}
  />
);

const Root = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="main_app">
        {/* <Header />
        <LeftSide />
        <SideRightMenu />
        <div className="router-content">
          <Switch>
            <Router exact path="/" component={Analyze} />
            <Router path="/docs" component={Docs} />
          </Switch>
        </div>
        <Footer /> */}
        <Switch>
          <Router exact path="/" component={Knowledge} />
          <Router path="/analyze" component={Analyze} />
          <Router path="/customize" component={Customize} />
        </Switch>

      </div>
    </Provider>
  </BrowserRouter>
);

export default hot(module)(Root);
