import { useQuery } from 'react-query';
import { getPostDetail, getPosts } from 'service/posts';
import { getAlumni, statisticAlumniStatus } from '../service/alumni';

export const useGetPosts = (type, page, limit, textSearch = undefined) => useQuery(
    'useGetPosts',
    () => getPosts(type, page, limit)
  );

export const useGetPostDetail = (categoryId, postId) => useQuery(
  'useGetPostDetail',
  () => getPostDetail(categoryId, postId)
);

export const useGetAlumni = (page, limit) => useQuery(
  'useGetAlumni',
  () => getAlumni(page, limit)
);

export const useStatisticAlumniStatus = (status = []) => useQuery(
  'statisticAlumniStatus',
  () => statisticAlumniStatus(status)
);
