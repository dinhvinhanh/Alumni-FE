import { useQuery } from 'react-query';
import { getPostDetail, getPosts } from 'service/posts';

export const useGetPosts = (category, page, limit) => useQuery(
    'useGetPosts',
    () => getPosts(category, page, limit)
  );

export const useGetPostDetail = (categoryId, postId) => useQuery(
  'useGetPostDetail',
  () => getPostDetail(categoryId, postId)
);
