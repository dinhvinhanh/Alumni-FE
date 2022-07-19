import { useQuery } from 'react-query';
import { getPosts } from 'service/core';

export const useGetPosts = (category, page, limit) => useQuery(
    'sdjalf',
    () => getPosts(category, page, limit)
  );
