import axios from 'axios';
import config from '../config';

export const login = async (email, password) => {
  const data = await axios.post(config.apiEndpoint + '/api/accounts/authenticate', {
    email,
    password
  })
  return data.data;
}

export const register = async (id, email) => {
  const data = await axios.post(config.apiEndpoint + '/api/accounts/register', {
    email,
    id
  })
  return data.data;
}