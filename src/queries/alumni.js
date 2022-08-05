import { useQuery } from 'react-query';
import { getListPost, getPostDetail, getPosts } from 'service/posts';
import {
  getAlumni,
  getMyProfile,
  getProfile, searchAlumni,
  statisticAlumniSalaryRange,
  statisticAlumniStatus
} from '../service/alumni';

export const useGetPosts = (categorySlug, page, limit) => useQuery(
    ['useGetPosts', categorySlug, page, limit],
    () => {
      return getPosts(categorySlug, page, limit);
    }
  );

export const useGetListPost = (status, page, limit) => useQuery(
  ['useGetListPost', status, page, limit],
  () => {
    return getListPost({ status, page, limit });
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

export const useGetProfile = (id) => useQuery(
  ['useGetProfile',  id],
  () => getProfile(id), {
    enabled: !!id,
  }
);

export const useGetMyProfile = () => useQuery(
  ['useGetMyProfile'],
  () => getMyProfile()
);

export const useSearchUser = (name) => useQuery(
  ['useSearchUser', name],
  () => searchAlumni(name), {
    enabled: !!name,
  }
);
