import axios from 'axios';
import config from '../config';

export const getCategories = async () => {
  const data = await axios.get( config.apiEndpoint + '/api/categories')
  return data.data;
}