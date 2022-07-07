import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from 'app/pages/HomePage';
import { AboutPage } from 'app/pages/AboutPage';
import { HeaderWrapper } from 'app/containers/HeaderWrapper';

const RootLayout = () => {
  return (
    <>
      <HeaderWrapper />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/about" component={AboutPage} exact={true} /></Switch>
      <div>footer - code them</div>
    </>
  );
};

export default RootLayout;
