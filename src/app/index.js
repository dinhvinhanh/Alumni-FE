import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'store';
import RootLayout from 'app/layouts/rootLayout';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
        {/* <GlobalStyle /> */}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
