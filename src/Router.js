import React from 'react';
import Stopwatch from 'components/Pages/Stopwatch';
import Timer from 'components/Pages/Timer';
import {Route} from 'react-router-native';

const Router = () => {
  return (
    <>
      <Route exact path="/" component={Timer} />
      <Route exact path="/stopwatch" component={Stopwatch} />
    </>
  );
};

export default Router;
