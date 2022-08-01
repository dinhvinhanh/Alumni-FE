import { useQuery } from 'react-query';
import { getPostDetail, getPosts } from 'service/posts';
import { getAlumni, statisticAlumniSalaryRange, statisticAlumniStatus } from '../service/alumni';

export const useGetPosts = (categorySlug, page, limit) => useQuery(
    ['useGetPosts', categorySlug, page, limit],
    () => {
      return getPosts(categorySlug, page, limit);
    }
  );

export const useGetPostDetail = (categoryId, postId) => useQuery(
  ['useGetPostDetail', categoryId, postId],
  () => getPostDetail(categoryId, postId)
);

export const useGetAlumni = (page, limit) => useQuery(
  ['useGetAlumni', page, limit],
  () => getAlumni(page, limit)
);

export const useStatisticAlumniStatus = () => useQuery(
  ['statisticAlumniStatus'],
  () => statisticAlumniStatus()
);

export const useStatisticAlumniSalaryRange = () => useQuery(
  ['useStatisticAlumniSalaryRange'],
  () => statisticAlumniSalaryRange()
);
