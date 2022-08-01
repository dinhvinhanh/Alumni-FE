import { useMutation } from 'react-query';
import { login, register } from '../service/account';
import { uploadAlumniCsv, uploadFile } from '../service/upload';

export const useLogin = () => useMutation(
  ({ email, password }) => login(email, password),
  {
    onError: error => error.response.data.message,
    onSettled: data => localStorage.setItem('authToken', data.data.token)
  });

export const useRegister = () => useMutation(
  ({ email, id }) => register(id, email)
);

export const useUploadAlumniCsv = () => useMutation(
  ({ file }) => uploadAlumniCsv(file), {
    onError: error => error,
  });

export const useUploadFile = () => useMutation(
  ({ file }) => uploadFile(file), {
    onError: error => error,
  });