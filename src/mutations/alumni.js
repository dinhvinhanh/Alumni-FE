import { useMutation } from 'react-query';
import jwt_decode from 'jwt-decode';
import { activeAccount, login, register } from '../service/account';
import { uploadAlumniCsv, uploadFile } from '../service/upload';
import { saveSurvey } from '../service/survey';
import { createAlumni, deleteAlumni, updateAlumni } from '../service/alumni';

export const useLogin = () => useMutation(login,
  {
    onError: error => error.response.data.message,
    onSuccess: data => {
      localStorage.setItem('authToken', data.data.token);
      localStorage.setItem('userInfo', JSON.stringify(jwt_decode(data.data.token)))
    }
  });

export const useRegister = () => useMutation(
  ({ email, id }) => register(id, email)
);

export const useActiveAccount = () => useMutation(
  ({ token, password }) => activeAccount(token, password)
);

export const useUploadAlumniCsv = () => useMutation(
  ({ file }) => uploadAlumniCsv(file), {
    onError: error => error,
  });

export const useUploadFile = () => useMutation(
  ({ file }) => uploadFile(file), {
    onError: error => error,
  });

export const useSaveSurvey = () => useMutation(
  (body) => saveSurvey(body), {
    onError: error => error,
  });

export const useDeleteAlumni = () => useMutation(
  (id) => deleteAlumni(id), {
    onError: error => error,
  });

export const useUpdateAlumni = () => useMutation(
  (body) => updateAlumni(body), {
    onError: error => error,
  });

export const useCreateAlumni = () => useMutation(
  (body) => createAlumni(body), {
    onError: error => error,
  });