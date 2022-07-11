import React from 'react';
import { Route } from 'react-router-dom';
import AdminPage from '../pages/AdminPage';

const AdminLayout = () => {
  return (
    <>
      <Route path="/*" component={AdminPage} exact={true} />
    </>
  );
};

export default AdminLayout;
