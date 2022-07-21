import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Helmet } from 'react-helmet-async';
import { Route, Router, Switch } from 'react-router-dom';
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
          <Route path={'/admin'} component={AdminLayout} exact />
          <Route path={'/'} component={RootLayout}/>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
