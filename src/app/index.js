import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { useTranslation } from 'react-i18next';
import { history } from 'store';

const queryClient = new QueryClient();
function App() {
  const { i18n } = useTranslation();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/">
        <Helmet
          defaultTitle=" Kết nối cựu sinh viên - UET "
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="Alumni - UET" />
        </Helmet>
        {/* @ts-ignore */}
        <ConnectedRouter history={history}>
          {/* <RootLayout /> */}
        </ConnectedRouter>
        {/* <GlobalStyle /> */}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
