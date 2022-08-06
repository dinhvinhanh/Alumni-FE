import { useMutation } from 'react-query';
import { browsePost, createPost, deletePost } from '../service/posts';

export const useCreatePost = () => useMutation(
  ({ title, content, thumbnail, categoryId, slug, location }) =>
    createPost({title, content, thumbnail, categoryId, slug, location}), {
    onError: error => error,
  });

export const useDeletePost = () => useMutation(
  (id) =>
    deletePost(id), {
    onError: error => error,
  });

export const useBrowsePost = () => useMutation(
  (id) =>
    browsePost(id), {
    onError: error => error,
  });