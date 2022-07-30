import { useMutation } from 'react-query';
import { login } from '../service/account';

export const useLogin = () => useMutation(
  ({ email, password }) => login(email, password),
  {
    onError: error => error.response.data.message,
  });

export const useRegister = () => useMutation(
  ({ email,  }) => login(id, email)
);id