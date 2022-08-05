import config from '../config';
import axiosInstance from '../utils/api/apiCall';
const format = require('date-format');

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

export const getProfile = async (id) => {
  const data = await axiosInstance.get(config.apiEndpoint + `/api/users/${id}`)
  return data.data;
}

export const getMyProfile = async () => {
  const data = await axiosInstance.get(config.apiEndpoint + '/api/users/profile')
  return data.data;
}

export const searchAlumni = async (name) => {
  const data = await axiosInstance.get(config.apiEndpoint + '/api/users/search', {
    params: {
      name
    }
  })
  return data.data;
}

export const deleteAlumni = async (id) => {
  const data = await axiosInstance.delete(config.apiEndpoint + `/api/users/${id}`)
  return data.data;
}

export const updateAlumni = async (body) => {
  const date = format.parse('dd-MM-yyyy', body.dateOfBirth)
  body.dateOfBirth = date.getTime();
  const data = await axiosInstance.patch(config.apiEndpoint + `/api/users/${body.id}`, {...body})
  return data.data;
}

export const createAlumni = async (body) => {
  const date = format.parse('dd-MM-yyyy', body.dateOfBirth)
  body.dateOfBirth = date.getTime();
  const data = await axiosInstance.post(config.apiEndpoint + '/api/users', {...body})
  return data.data;
}