import axios from 'axios';
import config from 'config';
import axiosInstance from '../utils/api/apiCall';

export const getPosts = async (
  categorySlug,
  page = 1,
  limit = 25
) => {
  const data = await axios.get(`${config.apiEndpoint}/api/categories/${categorySlug}?page=${page}&limit=${limit}`)
  return data.data.data;
};

export const searchPost = async (
  text,
  page = 1,
  limit = 25
) => {
  const data = await axios.get(`${config.apiEndpoint}/api/articles/search?q=${text}&page=${page}&limit=${limit}`)
  return data.data.data;
};


export const getPostDetail = async (categoryId, postId) => {
  const data = await axios.get( `${config.apiEndpoint}/api/articles/${postId}`)
  return data.data;
}

export const createPost = async (params) => {
  const data = await axiosInstance.post( `${config.apiEndpoint}/api/articles`, {...params})
  return data.data;
}

export const getListPost = async (params) => {
  const data = await axiosInstance.get( `${config.apiEndpoint}/api/articles`, {
    params: {...params}
  })
  return data.data;
}

export const deletePost = async (id) => {
  const data = await axios.delete( `${config.apiEndpoint}/api/articles/${id}`)
  return data.data;
}

export const browsePost = async (id) => {
  const data = await axios.patch( `${config.apiEndpoint}/api/articles/${id}`)
  return data.data;
}