import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Router, Switch } from 'react-router-dom';
import { history } from 'store';
import RootLayout from 'app/layouts/rootLayout';
import AdminLayout from './layouts/adminLayout';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router history={history}>
        <Switch>
          <Route path={'/admin'} component={AdminLayout} />
          <Route path={'/'} component={RootLayout}/>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
