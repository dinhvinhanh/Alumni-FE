import axios from 'axios';
import config from 'config';

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
  const data = await axios.post( `${config.apiEndpoint}/api/articles`, {...params})
  return data.data;
}