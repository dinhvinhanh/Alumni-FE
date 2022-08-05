import axiosInstance from '../utils/api/apiCall';
import config from '../config';

export const saveSurvey = async (body) => {
  const data = await axiosInstance.post(config.apiEndpoint + '/api/surveys', {...body})
  return data.data;
}