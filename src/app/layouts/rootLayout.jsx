import React from 'react';
import { Route } from 'react-router-dom';
import { HomePage } from 'app/pages/HomePage';
import { AboutPage } from 'app/pages/AboutPage';
import { HeaderWrapper } from 'app/containers/HeaderWrapper';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <>
      <HeaderWrapper />
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/about" component={AboutPage} exact={true} />
      <Footer />
    </>
  );
};

export default RootLayout;
