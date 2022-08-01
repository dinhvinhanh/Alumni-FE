import config from '../config';
import axiosInstance from '../utils/api/apiCall';

export const getAlumni = async (page, limit) => {
  const data = await axiosInstance.get(config.apiEndpoint + `/api/users?page=${page}&limit=${limit}`)
  return data.data;
}

export const statisticAlumniStatus = async () => {
  const data = await axiosInstance.get(config.apiEndpoint + '/api/statistics/alumni/status')
  return data.data;
}

export const statisticAlumniSalaryRange = async () => {
  const data = await axiosInstance.get(config.apiEndpoint + '/api/statistics/alumni/salary')
  return data.data;
}