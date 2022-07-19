import React from 'react';
import { Route } from 'react-router-dom';
import { HomePage } from 'app/pages/HomePage';
import { AboutPage } from 'app/pages/AboutPage';
import { HeaderWrapper } from 'app/containers/HeaderWrapper';
import Footer from 'app/components/Footer';
import { PostDetailPage } from 'app/pages/PostDetailPage';
import ResponsiveAppBar from 'app/components/ResponsiveAppBar';
import { CategoryPage } from '../pages/CategoryPage';

const RootLayout = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50">
      <HeaderWrapper />
      {/* <ResponsiveAppBar /> */}
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/about" component={AboutPage} exact={true} />
        <Route path="/post" component={PostDetailPage} exact={true} />
        <Route path="/category" component={CategoryPage} exact={true} />
      <Footer />
    </div>
  );
};

export default RootLayout;
