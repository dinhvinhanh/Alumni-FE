import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'store';
import RootLayout from 'app/layouts/rootLayout';
import AdminLayout from './layouts/adminLayout';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router history={history}>
        <Switch>
          <Route name="admin" path={'/admin'}>
            <BrowserRouter basename="/admin">
              <Helmet
                defaultTitle=" Admin Dashboard "
                htmlAttributes={{ lang: 'vn' }}
              >
                <meta name="description" content="Alumni - UET" data-rh="true"/>
              </Helmet>
              <ConnectedRouter history={history}>
                <AdminLayout />
              </ConnectedRouter>
            </BrowserRouter>
          </Route>
          <Route name="admin" path={'/'}>
            <BrowserRouter basename="/">
              <Helmet
                defaultTitle=" Kết nối cựu sinh viên - UET "
                htmlAttributes={{ lang: 'vn' }}
              >
                <meta name="description" content="Alumni - UET" data-rh="true"/>
              </Helmet>
              <ConnectedRouter history={history}>
                <RootLayout />
              </ConnectedRouter>
            </BrowserRouter>
          </Route>
        </Switch>
      </Router>

    </QueryClientProvider>
  );
}

export default App;
