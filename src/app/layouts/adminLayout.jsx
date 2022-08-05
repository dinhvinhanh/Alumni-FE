import React from 'react';
import AdminPage from '../pages/AdminPage';
import PrivateRoute from '../containers/PrivateRoute';

const AdminLayout = () => {
  return (
    <PrivateRoute redirectTo={'/login?message=Bạn phải đăng nhập trước!'} role={'ROLE_USER'}>
      <AdminPage />
    </PrivateRoute>
  );
};

export default AdminLayout;
