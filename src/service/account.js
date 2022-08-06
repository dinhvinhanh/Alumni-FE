import axios from 'axios';
import config from '../config';
import axiosInstance from '../utils/api/apiCall';

export const login = async ({ email, password }) => {
  const data = await axios.post(config.apiEndpoint + '/api/accounts/authenticate', {
    email: email.trim(),
    password
  })
  return data.data;
}

export const register = async (id, email) => {
  const data = await axios.post(config.apiEndpoint + '/api/accounts/register', {
    email: email.trim(),
    id
  })
  return data.data;
}

export const activeAccount = async (token, password) => {
  const data = await axios.post(config.apiEndpoint + '/api/accounts/active', {
    token,
    password
  })
  return data.data;
}

export const changePassword = async ({ oldPassword, newPassword }) => {
  const data = await axiosInstance.post(config.apiEndpoint + '/api/users/change-password', {
    oldPassword,
    newPassword
  })
  return data.data;
}
