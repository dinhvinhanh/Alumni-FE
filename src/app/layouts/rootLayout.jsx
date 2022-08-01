import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { HomePage } from 'app/pages/HomePage';
import { AboutPage } from 'app/pages/AboutPage';
import { HeaderWrapper } from 'app/containers/HeaderWrapper';
import Footer from 'app/components/Footer';
import { PostDetailPage } from 'app/pages/PostDetailPage';
import { CategoryPage } from '../pages/CategoryPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const RootLayout = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50">
      <HeaderWrapper />
      {/* <ResponsiveAppBar /> */}
      <Switch>
        <Route path="/about" component={withRouter(AboutPage)} />
        <Route path="/post" component={withRouter(PostDetailPage)} />
        <Route path="/su-kien" component={withRouter(CategoryPage)} exact />
        <Route path="/tin-tuc" component={withRouter(CategoryPage)} exact />
        <Route path="/guong-mat-cuu-sinh-vien" component={withRouter(CategoryPage)} exact />
        <Route path="/search" component={withRouter(CategoryPage)} exact />
        <Route path="/login" component={LoginPage} exact={true} />
        <Route path="/register" component={RegisterPage} exact={true} />
        <Route path="/" component={withRouter(HomePage)} />
      </Switch>
      <Footer />
    </div>
  );
};

export default RootLayout;
