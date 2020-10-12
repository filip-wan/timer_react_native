import * as React from 'react';
import Home from './components/Pages/Home';
import Settings from './components/Pages/Settings';
import {Route} from 'react-router-native';

const Router = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/settings" component={Settings} />
    </>
  );
};

export default Router;
