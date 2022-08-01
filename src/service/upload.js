import config from '../config';
import axiosInstance from '../utils/api/apiCall';

export const uploadAlumniCsv = async (file) => {
  const data = await axiosInstance.post(config.apiEndpoint + '/api/files/upload-alumni', {
    file
  }, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  return data.data;
}

export const uploadFile = async (file) => {
  const data = await axiosInstance.post( config.apiEndpoint + '/api/files/upload', {
    file
  }, {
    headers: { 'Content-Type': 'multipart/form-data'}
  })
  return data.data;
}