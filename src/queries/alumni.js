import { useQuery } from 'react-query';
import { getPostDetail, getPosts } from 'service/posts';

export const useGetPosts = (type, page, limit, textSearch = undefined) => useQuery(
    'useGetPosts',
    () => getPosts(type, page, limit)
  );

export const useGetPostDetail = (categoryId, postId) => useQuery(
  'useGetPostDetail',
  () => getPostDetail(categoryId, postId)
);
