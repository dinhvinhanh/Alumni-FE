import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { checkRole } from 'utils/auth';

export default function PrivateRoute({ children,  role, redirectTo, unverifiedComponent, ...other }) {
  const history = useHistory();

  const checkAuth = checkRole(role)

  useEffect(() => {
    if (!checkAuth && redirectTo !== undefined) {
      history.push(redirectTo);
    }
  }, [redirectTo, checkAuth])

  return (
    <>
      {checkAuth ? children : unverifiedComponent}
    </>
  )
}