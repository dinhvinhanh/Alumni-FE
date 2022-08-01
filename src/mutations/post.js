import { useMutation } from 'react-query';
import { createPost } from '../service/posts';

export const useCreatePost = () => useMutation(
  ({ title, content, thumbnail, categoryId, slug, location }) =>
    createPost({title, content, thumbnail, categoryId, slug, location}), {
    onError: error => error,
  });