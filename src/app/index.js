import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'store';

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
        {/* @ts-ignore */}
        {/* <ConnectedRouter history={history}> */}
        {/*   <div>hello</div> */}
        {/* </ConnectedRouter> */}
        {/* <GlobalStyle /> */}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
