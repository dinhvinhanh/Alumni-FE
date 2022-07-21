import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { HomePage } from 'app/pages/HomePage';
import { AboutPage } from 'app/pages/AboutPage';
import { HeaderWrapper } from 'app/containers/HeaderWrapper';
import Footer from 'app/components/Footer';
import { PostDetailPage } from 'app/pages/PostDetailPage';
import { CategoryPage } from '../pages/CategoryPage';
import LoginPage from '../pages/LoginPage';

const RootLayout = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50">
      <HeaderWrapper />
      {/* <ResponsiveAppBar /> */}
      <Switch>
        <Route path="/about" component={withRouter(AboutPage)} />
        <Route path="/post" component={withRouter(PostDetailPage)} />
        <Route path="/category" component={withRouter(CategoryPage)} exact />
        <Route path="/login" component={LoginPage} exact={true} />
        <Route path="/" component={withRouter(HomePage)} />
      </Switch>
      <Footer />
    </div>
  );
};

export default RootLayout;
