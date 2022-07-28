import ProfileForm from '../../components/ProfileForm';
import { Helmet } from 'react-helmet-async';
import * as React from 'react';

export default function AccountControl() {
  return (
    <div>
      <Helmet>
        <title>Quản lý cựu tài khoản</title>
      </Helmet>
      <ProfileForm />
    </div>
  );
}
